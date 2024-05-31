package routes

import (
	"encoding/json"
	"io"
	"math/rand"
	"net/http"
	"os"
	"time"

	"my-go-fiber-app/models"

	"github.com/gofiber/fiber/v2"
)

func SearchRoute(app *fiber.App) {
	app.Get("/imdb/random-movies", func(c *fiber.Ctx) error {
		// Fetch RapidAPI key and host from environment variables
		apiKey := os.Getenv("REACT_APP_RAPIDAPI_KEY")
		host := os.Getenv("REACT_APP_RAPIDAPI_HOST")

		if apiKey == "" || host == "" {
			return c.Status(fiber.StatusInternalServerError).SendString("RapidAPI key or host not set")
		}

		url := "https://imdb8.p.rapidapi.com/auto-complete?q=movie"

		req, err := http.NewRequest("GET", url, nil)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("Failed to create request")
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

		var imdbResponse models.IMDbAutoCompleteResponse
		if err := json.Unmarshal(body, &imdbResponse); err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("Failed to parse JSON response")
		}

		if len(imdbResponse.D) == 0 {
			return c.Status(fiber.StatusNotFound).SendString("No movies found")
		}

		rand.Seed(time.Now().UnixNano())
		randomMovie := imdbResponse.D[rand.Intn(len(imdbResponse.D))]

		movieData := map[string]interface{}{
			"title":    randomMovie.L,
			"year":     randomMovie.Y,
			"synopsis": randomMovie.Q,
			"genre":    randomMovie.G, // Assuming Q holds the genre
			"imageUrl": randomMovie.I.ImageURL,
		}

		return c.JSON(movieData)
	})
}
