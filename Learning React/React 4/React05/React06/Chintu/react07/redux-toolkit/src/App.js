import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './ReduxToolkit/CounterSlice'; // Ensure correct import path

function App() {
  const dispatch = useDispatch(); // Initialize dispatch
  const myState = useSelector((state) => state.counter.count); // Access state using useSelector

  return (
    <>
      <div className="App">
        <h1 mt-4>Welcome to ReduxToolkit Example</h1>
        <input type="text" value={myState} readOnly />
        <br />
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(increment())} // Dispatch increment action
        >
          Increment
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(decrement())} // Dispatch decrement action
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
