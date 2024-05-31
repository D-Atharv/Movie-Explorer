package models

type IMDbAutoCompleteResponse struct {
	D []struct {
		L string `json:"l"` // Title
		Y int    `json:"y"` // Year
		I struct {
			ImageURL string `json:"imageUrl"` // Image URL
		} `json:"i"`
		Q string   `json:"q"` // Synopsis
		G []string `json:"g"` // Genre
	} `json:"d"`
}
