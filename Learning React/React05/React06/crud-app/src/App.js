// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Component/Create'
import Read from './Component/Read';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from './Component/Edit';

function App() {
  return (
    <div className="container">


      <Routes>

        <Route path='/'  element={ <Read/>}> </Route>
        <Route path='/Edit'  element={ <Edit/>} ></Route>      
        <Route path='/Create'  element={ <Create/>} ></Route>

      </Routes>

  
      
    </div>

   




  );
}

export default App;
