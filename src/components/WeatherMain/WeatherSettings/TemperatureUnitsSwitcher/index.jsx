import WeatherContext from "../../../../contexts/WeatherContext";

const TEMPERATURE_UNITS_OPTIONS = ["°C", "°F"];

function TemperatureUnitsSwitcher() {
  return (
    <WeatherContext.Consumer>
      {({ temperatureUnits, setTemperatureUnits }) => {
        const changeTemperatureUnits = ({ target: { value } }) => {
          setTemperatureUnits(value);
        };

        return (
          <>
            <h3>Temperature Unit:</h3>
            <select value={temperatureUnits} onChange={changeTemperatureUnits}>
              {TEMPERATURE_UNITS_OPTIONS.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </>
        );
      }}
    </WeatherContext.Consumer>
  );
}

export default TemperatureUnitsSwitcher;
