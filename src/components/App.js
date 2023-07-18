
import React from "react";
import "./../styles/App.css";

const App = ({ weather }) => {
const temperatureColor = weather.temperature > 20 ? "red" : "blue";

return (
<div>
<h1>Weather App</h1>
<div className={temperature ${temperatureColor}}>
Temperature: {weather.temperature}°C
</div>
<div>Conditions: {weather.conditions}</div>
</div>
);
};

export default App;