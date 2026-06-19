import WeatherContext from "../../../../contexts/WeatherContext";

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
              <option value="°C">°C</option>
              <option value="°F">°F</option>
            </select>
          </>
        );
      }}
    </WeatherContext.Consumer>
  );
}

export default TemperatureUnitsSwitcher;
