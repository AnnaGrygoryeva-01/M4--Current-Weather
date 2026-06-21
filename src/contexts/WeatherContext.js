import { createContext } from "react";

const defaultWeatherContext = {
  windUnits: "Km/h",
  temperatureUnits: "°C",
  temp: null,
  windSpeed: null,
  isLoading: true,
  error: null,
  setWindUnits: () => {},
  setTemperatureUnits: () => {},
};

const WeatherContext = createContext(defaultWeatherContext);

export default WeatherContext;
