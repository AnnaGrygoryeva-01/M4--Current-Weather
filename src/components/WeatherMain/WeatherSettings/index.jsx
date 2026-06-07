import React from "react";
import WindUnitsSwitcher from "./WindUnitsSwitcher";
import TemperatureUnitsSwitcher from "./TemperatureUnitsSwitcher";

function WeatherSettings() {
  return (
    <>
      <WindUnitsSwitcher />
      <TemperatureUnitsSwitcher />
    </>
  );
}

export default WeatherSettings;
