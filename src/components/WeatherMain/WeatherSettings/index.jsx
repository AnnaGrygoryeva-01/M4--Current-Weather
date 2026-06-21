import WindUnitsSwitcher from "./WindUnitsSwitcher";
import TemperatureUnitsSwitcher from "./TemperatureUnitsSwitcher";
import styles from "./WeatherSettings.module.sass";

function WeatherSettings() {
  return (
    <article className={styles.settingsContainer}>
      <div>
        <WindUnitsSwitcher />
      </div>
      <div>
        <TemperatureUnitsSwitcher />
      </div>
    </article>
  );
}

export default WeatherSettings;
