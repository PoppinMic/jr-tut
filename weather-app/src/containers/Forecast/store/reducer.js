import { GET_FORECAST } from "./actionTypes";

const initialState = {
  isFetched: false,
  data: null
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORECAST:
      state = { ...state, isFetched: true, data: action.payload };
      break;
    default:
      return state;
  }
  return state;
};

export default forecastReducer;
