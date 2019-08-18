import React from 'react';
import CurrentWeather from './containers/CurrentWeather';
import Forecast from './containers/Forecast';
import NewsContainer from './containers/NewsContainer';


function App() {
  return (
    <div id="weather-app">
      <CurrentWeather />
      <Forecast />
      <NewsContainer />
    </div>
  );
}

export default App;
