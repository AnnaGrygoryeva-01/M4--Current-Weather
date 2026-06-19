import React from "react";
import CONSTANTS from "../../../constants";
import WeatherContext from "../../../contexts/WeatherContext";
import styles from "./WeatherDisplay.module.sass";

const { KILOMETERS, METERS } = CONSTANTS.WIND;
const { CELSIUS, FAHRENHEIT } = CONSTANTS.TEMPERATURE;

function WeatherDisplay() {
  return (
    <article>
      <WeatherContext.Consumer>
        {({ temp, windSpeed, windUnits, temperatureUnits }) => {
          let displayTemp = temp;
          if (temperatureUnits === FAHRENHEIT) {
            displayTemp = (temp * 9) / 5 + 32;
          }

          let displayWind = windSpeed;
          if (windUnits === METERS) {
            displayWind = windSpeed / 3.6;
          }

          const tempLabel = temperatureUnits === CELSIUS ? "°C" : "°F";
          const windLabel = windUnits === KILOMETERS ? "Km/h" : "M/s";

          return (
            <div className={styles.displayContainer}>
              <h2>Current Weather</h2>
              <div className={styles.displayGadgets}>
                <p>
                  <i className="fa-solid fa-temperature-half"></i>{" "}
                  {displayTemp.toFixed(1)} {tempLabel}
                </p>
                <p>
                  <i className="fa-solid fa-wind"></i> {displayWind.toFixed(1)}{" "}
                  {windLabel}
                </p>
              </div>
            </div>
          );
        }}
      </WeatherContext.Consumer>
    </article>
  );
}

export default WeatherDisplay;
