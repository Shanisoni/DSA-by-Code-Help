// import logo from './logo.svg';
import './App.css';
// import UScomponent from './UScomponent';
import USWithArray from './USWithArray';
import ClassComponent from './ClassComponent';
import FunctionState from './FunctionState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <>
      {/* <UScomponent/> */}
      <ClassComponent/>
      <FunctionState/>
      <USWithArray/>
      
      </>
      </header>
    </div>
  );
}

export default App;
