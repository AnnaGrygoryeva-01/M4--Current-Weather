import { Component } from "react";
import WeatherSettings from "./WeatherSettings";
import WeatherDisplay from "./WeatherDisplay";
import styles from "./WeatherMain.module.sass";
import CONSTANTS from "../../constants";
import WeatherContext from "../../contexts/weatherContext";

const { KILOMETERS, METERS } = CONSTANTS.WIND;
const { CELSIUS, FAHRENHEIT } = CONSTANTS.TEMPERATURE;

class WeatherMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windUnits: KILOMETERS,
      temperatureUnits: CELSIUS,
    };
  }

  setWindUnits = (newWindUnits) => {
    this.setState({ windUnits: newWindUnits });
  };

  setTemperatureUnits = (newTemperatureUnits) => {
    this.setState({ temperatureUnits: newTemperatureUnits });
  };

  render() {
    const { windUnits, temperatureUnits } = this.state;
    return (
      <article className={styles.container}>
        <WeatherContext.Provider
          value={{
            windUnits,
            temperatureUnits,
            setWindUnits: this.setWindUnits,
            setTemperatureUnits: this.setTemperatureUnits,
          }}
        >
          <WeatherSettings />
          <WeatherDisplay />
        </WeatherContext.Provider>
      </article>
    );
  }
}
export default WeatherMain;
