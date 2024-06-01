package main

import (
	"my-go-fiber-app/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	// Create a new Fiber instance
	app := fiber.New()

	// Enable CORS
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	// Use the route defined in the routes package
	routes.SearchRoute(app)
	routes.MiddleRoute(app)

	// Start the Fiber app
	err := app.Listen(":3000")
	if err != nil {
		panic(err)
	}
}
