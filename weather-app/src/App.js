import React from "react";
import CityDetails from "./components/CityDetails";
import TwitterFeed from "./components/TwitterFeeds";
import { Forecast } from "./components/Forecast";

import './App.css';

function App() {
  return (
    <main className="app">
      <CityDetails degree='12' weather="Cloudy" />
      <TwitterFeed />
      <Forecast />
    </main>
  );
}

export default App;
