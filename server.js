const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5173;
const weatherData = require('./data/weather.json');

app.use(cors());

function Forecast(day) {
  this.date = day.valid_date;
  this.description = `Low of ${day.min_temp}, high of ${day.max_temp} with ${day.weather.description}`;
}

app.get('/weather', (req, res) => {
  const { lat, lon, searchQuery } = req.query;

  if (!lat || !lon || !searchQuery) {
    return res.status(400).send({ message: "Latitude, longitude, and searchQuery are required." });
  }

  const city = weatherData.find(city =>
    city.city_name.toLowerCase() === searchQuery.toLowerCase() &&
    city.lat === lat &&
    city.lon === lon
  );

  if (!city) {
    return res.status(404).send({ message: "City not found in placeholder data" });
  }

  const forecasts = city.data.map(day => new Forecast(day));
  res.json(forecasts);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
