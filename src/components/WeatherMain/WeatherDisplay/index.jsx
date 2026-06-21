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
          const hasTemp = typeof temp === "number" && Number.isFinite(temp);
          const hasWind =
            typeof windSpeed === "number" && Number.isFinite(windSpeed);

          let displayTemp = hasTemp ? temp : null;
          if (hasTemp && temperatureUnits === FAHRENHEIT) {
            displayTemp = (temp * 9) / 5 + 32;
          }

          let displayWind = hasWind ? windSpeed : null;
          if (hasWind && windUnits === METERS) {
            displayWind = windSpeed / 3.6;
          }

          const tempLabel = temperatureUnits === CELSIUS ? "°C" : "°F";
          const windLabel = windUnits === KILOMETERS ? "Km/h" : "M/s";

          const tempText = displayTemp !== null ? displayTemp.toFixed(1) : "--";
          const windText = displayWind !== null ? displayWind.toFixed(1) : "--";

          return (
            <div className={styles.displayContainer}>
              <h2>Current Weather</h2>
              <div className={styles.displayGadgets}>
                <p>
                  <i className="fa-solid fa-temperature-half"></i> {tempText}{" "}
                  {tempLabel}
                </p>
                <p>
                  <i className="fa-solid fa-wind"></i> {windText} {windLabel}
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
