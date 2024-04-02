import React from 'react';

function Weather({ forecast }) {
  return (
    <div>
      <h2>Weather Forecast</h2>
      {forecast.map((day, index) => (
        <div key={index}>
          <p>{day.date}: {day.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Weather;
