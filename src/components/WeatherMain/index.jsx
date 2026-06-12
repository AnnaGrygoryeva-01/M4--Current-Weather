import { Component } from "react";
import WeatherSettings from "./WeatherSettings";
import WeatherDisplay from "./WeatherDisplay";
import styles from "./WeatherMain.module.sass";
import CONSTANTS from "../../constants";
import WeatherContext from "../../contexts/weatherContext";

const { KILOMETERS, METERS } = CONSTANTS.WIND;
const { CELSIUS, FAHRENHEIT } = CONSTANTS.TEMPERATURE;
const { WEATHER_URL } = CONSTANTS;

class WeatherMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windUnits: KILOMETERS,
      temperatureUnits: CELSIUS,
      temp: null,
      windSpeed: null,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather = async () => {
    try {
      const response = await fetch(WEATHER_URL);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();

      this.setState({
        temp: data.current.temperature_2m,
        windSpeed: data.current.wind_speed_10m,
        isLoading: false,
      });
    } catch (err) {
      this.setState({ error: err.message, isLoading: false });
    }
  };

  setWindUnits = (newWindUnits) => {
    this.setState({ windUnits: newWindUnits });
  };

  setTemperatureUnits = (newTemperatureUnits) => {
    this.setState({ temperatureUnits: newTemperatureUnits });
  };

  render() {
    const { windUnits, temperatureUnits, temp, windSpeed, isLoading, error } =
      this.state;

    return (
      <article className={styles.container}>
        <WeatherContext.Provider
          value={{
            windUnits,
            temperatureUnits,
            temp,
            windSpeed,
            setWindUnits: this.setWindUnits,
            setTemperatureUnits: this.setTemperatureUnits,
          }}
        >
          <WeatherSettings />

          {isLoading ? (
            <p>Loading weather...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <WeatherDisplay />
          )}
        </WeatherContext.Provider>
      </article>
    );
  }
}

export default WeatherMain;
