import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './SCREENS/Home';
import CharacterCounter from './SCREENS/CharacterCounter';
import PasswordMatch from './SCREENS/PasswordMatch';
import DesignerTool from './SCREENS/DesignerTool';
import SwitchTabs from './SCREENS/SwitchTabs';
import Toast from './SCREENS/Toast';
import Todo from './SCREENS/Todo';
import DarkMode from './SCREENS/DarkMode';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/character-counter" exact component={CharacterCounter} />
          <Route path="/password-match" exact component={PasswordMatch} />
          <Route path="/designer-tool" exact component={DesignerTool} />
          <Route path="/switch-tabs" exact component={SwitchTabs} />
          <Route path="/toast" exact component={Toast} />
          <Route path="/todo" exact component={Todo} />
          <Route path="/dark-mode" exact component={DarkMode} />
        </Switch>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
