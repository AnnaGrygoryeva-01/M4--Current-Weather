import WeatherContext from "../../../../contexts/WeatherContext";

const WIND_UNITS_OPTIONS = ["Km/h", "M/s"];

function WindUnitsSwitcher() {
  return (
    <WeatherContext.Consumer>
      {({ windUnits, setWindUnits }) => {
        const changeWindUnits = ({ target: { value } }) => {
          setWindUnits(value);
        };

        return (
          <>
            <h3>Wind Speed Unit:</h3>
            <select value={windUnits} onChange={changeWindUnits}>
              {WIND_UNITS_OPTIONS.map((unit) => (
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

export default WindUnitsSwitcher;
