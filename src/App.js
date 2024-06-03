import "./App.css";
import MyRGBPanel from "./components/rgb-panel/MyRGBPanel";
import MySlider from "./components/rgb-panel/MySlider";
import MyCalculator from "./components/calculator/MyCalculator";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";

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

        <div className="box">
          <h1>MyRGBPanel</h1>
          <MyRGBPanel />
        </div>

        <div className="box">
          <h1>MyCalculator</h1>
          <MyCalculator /> 
        </div>
        <div className="box">
          <h1>Tic-Tac-Toe Game</h1>
          <TicTacToe /> 
        </div>
      </div>
    </div>
  );
}

export default App;