import logo from './logo.svg';
import './App.css';
// import UScomponent from './UScomponent';
import USWithArray from './USWithArray';
import ClassComponent from './ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <>
      {/* <UScomponent/> */}
      <ClassComponent/>
      <USWithArray/>
      
      </>
      </header>
    </div>
  );
}

export default App;
