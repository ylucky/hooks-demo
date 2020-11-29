import logo from "./logo.svg";
import "./App.css";
import ClassCom from "./components/classc";
import FuncCom from "./components/func";
import ReducerCom from "./components/reducerCom";
import ContextCom from "./components/contextCom";
import HooksDemo from "./components/hooksDemo";
import RefDemo from "./components/refDemo";
import CallbackMemo from "./components/callbackMemo";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FuncCom />
      <ClassCom />
      <ReducerCom />
      <ContextCom />
      <RefDemo />
      <CallbackMemo />
      <HooksDemo />
    </div>
  );
}

export default App;
