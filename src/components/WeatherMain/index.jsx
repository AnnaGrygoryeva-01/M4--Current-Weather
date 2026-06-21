import { Component } from "react";
import WeatherSettings from "./WeatherSettings";
import WeatherDisplay from "./WeatherDisplay";
import styles from "./WeatherMain.module.sass";
import CONSTANTS from "../../constants";
import WeatherContext from "../../contexts/WeatherContext.js";

const { KILOMETERS } = CONSTANTS.WIND;
const { CELSIUS } = CONSTANTS.TEMPERATURE;
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
    this._abortController = null;
    this.fetchWeather();
  }

  fetchWeather = async () => {
    if (this._abortController) this._abortController.abort();
    this._abortController = new AbortController();
    const { signal } = this._abortController;

    try {
      const res = await fetch(WEATHER_URL, { signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const temp = Number.isFinite(data?.current?.temperature_2m)
        ? data.current.temperature_2m
        : null;
      const windSpeed = Number.isFinite(data?.current?.wind_speed_10m)
        ? data.current.wind_speed_10m
        : null;

      if (temp === null && windSpeed === null) {
        this.setState({ error: "No weather data returned", isLoading: false });
        return;
      }

      this.setState({ temp, windSpeed, isLoading: false });
    } catch (err) {
      if (err.name === "AbortError") return;
      this.setState({ error: err.message, isLoading: false });
    }
  };

  componentWillUnmount() {
    if (this._abortController) this._abortController.abort();
  }

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
