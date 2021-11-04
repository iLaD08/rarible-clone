import axios from "axios";

const headers = {
  "x-rapidapi-host": "rarible-data-scraper.p.rapidapi.com",
  "x-rapidapi-key": "62f1e07a06mshb58178b98356480p135ff4jsnbcfab5493d0e",
};

export default axios.create({
  baseURL: "https://rarible-data-scraper.p.rapidapi.com",
  headers: headers
});
