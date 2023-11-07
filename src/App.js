import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Weather App</p>
        <WeatherSearch />
        <small>
          <a href="https://github.com/nahafatmaa/weather-react">
            Open-source code
          </a>
          By Naha Fatma
        </small>
      </header>
    </div>
  );
}

export default App;
