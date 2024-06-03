import "./App.css";
import MyRGBPanel from "./components/MyRGBPanel";
import MySlider from "./components/MySlider";
import MyCalculator from "./components/MyCalculator";

function App() {
  return (
    
    <div className="App">
      <div className="title">
        <p>React  Element</p>
      </div>
      <div className="big-box">
      <div className="box">
        <h1>MySlider</h1>
        <MySlider />
      </div>

      

      </div>
    </div>
  );
}

export default App;