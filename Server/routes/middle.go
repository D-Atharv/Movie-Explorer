package routes

import (
	"encoding/json"
	"io"
	"my-go-fiber-app/models"
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
)

func MiddleRoute(app *fiber.App) {
	app.Get("/imdb/random-movies", func(c *fiber.Ctx) error {
		url := "https://imdb8.p.rapidapi.com/auto-complete?q=movie"

		req, err := http.NewRequest("GET", url, nil)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("Failed to create request")
		}

		// Fetch the API key and host from environment variables
		apiKey := os.Getenv("REACT_APP_RAPIDAPI_KEY")
		host := os.Getenv("REACT_APP_RAPIDAPI_HOST")

		if apiKey == "" || host == "" {
			return c.Status(fiber.StatusInternalServerError).SendString("RapidAPI key or host not set")
		}

		req.Header.Add("X-RapidAPI-Key", apiKey)
		req.Header.Add("X-RapidAPI-Host", host)

		client := &http.Client{}
		res, err := client.Do(req)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("Failed to make request")
		}
		defer res.Body.Close()

		body, err := io.ReadAll(res.Body)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("Failed to read response body")
		}

		var imdbResponse models.IMDbTopFiveResponse
		if err := json.Unmarshal(body, &imdbResponse); err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("Failed to parse JSON response")
		}

		if len(imdbResponse.D) == 0 {
			return c.Status(fiber.StatusNotFound).SendString("No movies found")
		}

		// Limit the results to the top 5 movies or series
		topMovies := imdbResponse.D
		if len(topMovies) > 5 {
			topMovies = topMovies[:5] // Slicing the array to only include the top 5 elements
		}

		imageUrls := []string{}
		for _, item := range topMovies {
			imageUrls = append(imageUrls, item.I.ImageURL)
		}

		return c.JSON(imageUrls) // Send only the image URLs of the top 5 movies to the frontend
	})
}
