import logo from './logo.svg';
import './App.css';
// import Component1 from './Component1';
import Component1 from './Components/Component1';
import VsComponent from './Components/VsComponent';

function App() {
  return (
    <div className="App">
      <>
      <Component1 check = {false} />
      <VsComponent/>
      </>
     
    </div>
  );
}

export default App;
