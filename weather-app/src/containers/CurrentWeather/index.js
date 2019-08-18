import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components';

import { WEATHER_API_KEY } from "../../keys";
import { CURRENT_WEATHER } from "../../endPoints";
import DetailWeather from "./DetailWeather";
import City from "./City";

const Wrapper = styled.div`
  background: green;
`

const CITY = "Sydney,au";
class CurrentWeather extends Component {
  // async componentDidMount(){
  //   const res = await axios.get(`${CURRENT_WEATHER}?q=${CITY}&APPID=${WEATHER_API_KEY}`)
  //   console.log(res)
  // }

  render() {
    return (
      <Wrapper>
        <DetailWeather />
        <City />
      </Wrapper>
    );
  }
}

export default CurrentWeather;
