import React, {Component} from 'react';
import axios from 'axios';

import {WEATHER_API_KEY} from '../../keys'
import { CURRENT_WEATHER } from '../../endPoints';

const CITY = 'Sydney,au'
class CurrentWeather extends Component{
  async componentDidMount(){
    const res = await axios.get(`${CURRENT_WEATHER}?q=${CITY}&APPID=${WEATHER_API_KEY}`)
    console.log(res)
  }

  redner(){  
    return (
    <div>
      Current Weather
    </div>
  );
}

}

export default CurrentWeather;