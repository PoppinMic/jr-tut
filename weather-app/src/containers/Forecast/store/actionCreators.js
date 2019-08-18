import axios from 'axios';
import { FORECAST } from '../../../endPoints';
import { WEATHER_API_KEY } from '../../../keys';
import { GET_FORECAST } from './actionTypes';

const CITY_NAME = 'London%2Cuk'

export const getWeatherForecast = async (dispatch,getState) =>{
  const res = await axios.get(`${FORECAST}?q=${CITY_NAME}&units=metric&APPID=${WEATHER_API_KEY}`);
  return dispatch({
    type: GET_FORECAST,
    payload: res.data && res.data.list
  })
}