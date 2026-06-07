import WeatherContext from "../../../../contexts/weatherContext";

function WindUnitsSwitcher() {
  return (
    <WeatherContext.Consumer>
      {({ windUnits, setWindUnits }) => {
        const changeWindUnits = ({ target: { value } }) => {
          setWindUnits(value);
        };

        return (
          <>
            <h2>Wind Speed Unit:</h2>
            <select value={windUnits} onChange={changeWindUnits}>
              <option value="Km/h">Km/h</option>
              <option value="M/s">M/s</option>
            </select>
          </>
        );
      }}
    </WeatherContext.Consumer>
  );
}

export default WindUnitsSwitcher;
