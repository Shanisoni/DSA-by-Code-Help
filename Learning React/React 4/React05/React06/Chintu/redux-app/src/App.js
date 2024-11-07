import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 mt-4>
        Welcome to Redux App
      </h1>
      <input type="text" placeholder="Enter your data " />
      <br/>
      <br/>
      <button type="button"  className = 'btn btn-primary'> Increment </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
      <button type="button"  className = 'btn btn-danger' > Decrement </button>
      
    </div>
  );
}

export default App;
