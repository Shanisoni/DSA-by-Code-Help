// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter } from 'react-router-dom';
import {Routes , Route }  from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />


      </Routes>


     
    </div>
  );  
}



export default App;
