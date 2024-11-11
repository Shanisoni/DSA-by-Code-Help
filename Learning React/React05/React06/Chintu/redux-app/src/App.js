// import logo from './logo.svg';
import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import {  Increase , Decrease } from './Actions';

function App() {

  const myState = useSelector ( (state) => state.Inc_dec);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1 mt-4>
        Welcome to Redux App
      </h1>
      <input type="text"   value={myState} />
      <br/>
      <br/>
      <button type="button"  className = 'btn btn-primary'  onClick={() => dispatch(Increase()) } > Increment </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
      <button type="button"  className = 'btn btn-danger'  onClick={() => dispatch(Decrease()) } > Decrement </button>
      
    </div>
  );
}

export default App;
