import {combineReducers} from 'redux';
import currentWeatherReducer from "./containers/CurrentWeather/store/reducer";
import forecastReducer from "./containers/Forecast/store/reducer";

const initialState = {
  isFetched: false,
  newsData: null
}

const newsReducer = (state=initialState, action)=>{
  switch(action.type){
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  currentWeatherReducer,
  forecastReducer,
  news:newsReducer
})

export default rootReducer;