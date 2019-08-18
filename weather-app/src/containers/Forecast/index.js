import React from "react";
import { connect } from "react-redux";

import { Wrapper } from "./styles";
import ForecastCard from "./ForecastCard";

import { getWeatherForecast } from "./store/actionCreators";

class Forecast extends React.Component {
  componentDidMount() {
    this.props.getForecast();
  }

  render() {
    const { isFetched, data } = this.props.forecasts;
    return (
      <Wrapper>
        {isFetched&&
          data.map(forecast => (
            <ForecastCard
              key={forecast.dt}
              weekday={forecast.dt_txt}
              temp={forecast.main.temp}
              desc={forecast.weather[0].main}
            />
          ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  forecasts: state.forecastReducer
});

const mapDispatchToProps = dispatch => ({
  getForecast: () => dispatch(getWeatherForecast)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast);
