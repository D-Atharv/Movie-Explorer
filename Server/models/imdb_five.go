package models

type IMDbTopFiveResponse struct {
	D []struct {
		L string `json:"l"`
		Y int    `json:"y"`
		I struct {
			ImageURL string `json:"imageUrl"`
		} `json:"i"`
	} `json:"d"`
}
