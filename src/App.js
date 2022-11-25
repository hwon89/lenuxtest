import logo from "./logo.svg";
import "./App.css";
import PrintMyName from "./components/PrintMyName";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <PrintMyName name="곽건호"></PrintMyName>
          <PrintMyName name="박광덕"></PrintMyName>
        </p>
      </header>
    </div>
  );
}

export default App;
