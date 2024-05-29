import "./App.css";
import MyRGBPanel from "./components/MyRGBPanel";
import MySlider from "./components/MySlider";
import MyCalculator from "./components/MyCalculator";

function App() {
  return (
    <div className="App">
      
      <div className="box">
        <h1>MySlider</h1>
        <MySlider />
      </div>

      <div className="box">
        <h1>MyRGBPanel</h1>
        <MyRGBPanel />
      </div>
      
      <div className="box">
        <h1>MyCalculator</h1>
        <MyCalculator />
      
      </div>
    </div>
  );
}

export default App;