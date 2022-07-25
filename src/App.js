import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";
import Forecast from "./Forecast";

import "./Style.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">How's the Weather?</h1>
      <div className="weather-app">
        <Search />
        <Weather />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
