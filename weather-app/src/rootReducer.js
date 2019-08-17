import {combineReducers} from 'redux';
import currentWeatherReducer from "./containers/CurrentWeather/store/reducer";
import forecastReducer from "./containers/Forecast/store/reducer";

const rootReducer = combineReducers({
  currentWeatherReducer,
  forecastReducer
})

export default rootReducer;