import logo from './logo.svg';
import './App.css';

import Capture from './capture';
import ViewList from './viewlist';
import Counter from './counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hello Hepsiba From Dimpi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Capture />
        <ViewList />
        <Counter />
      </header>
    </div>
  );
}

export default App;
