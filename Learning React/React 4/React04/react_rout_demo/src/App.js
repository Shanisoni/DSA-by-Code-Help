// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter } from 'react-router-dom';
import {Routes , Route, useNavigate }  from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import NavBar from './Component/NavBar';
import PageNotFound from './Component/PageNotFound';
import Products from './Component/Products';
import Shirts from './Component/Shirts';
import Woolen from './Component/Woolen';
import Shocks from './Component/Shocks';
import Jeans from './Component/Jeans';
import UserDetails from './Component/UserDetails';





function App() {
  const  navigate = useNavigate();
  // const navigateaboute = () => {
  //   navigate('/Home');
    
  // }
  // const navigateaboutr = () => {
  //   navigate('/Contact');
  // }




  // const navigateabout = () => {
  //   navigate('/about');
    
  // }

  const navigateabout = (url) => {
    navigate(url);
    
  }
  return (
    <div>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/about' element={<About/>} />

        <Route path='/Contact' element={<Contact/>} />

        <Route path='/Products' element = { <Products/>}>
          <Route index element = { < Jeans/>} />
          <Route path='Shirts' element={<Shirts/>}> Shirts </Route>
          <Route path='Woolen' element={<Woolen/>}> Woolen </Route>
          <Route path='Shocks' element={<Shocks/>}> Shocks </Route>
          <Route path='Jeans' element={<Jeans/>}> Jeans </Route>
         
        </Route>
        <Route path='/UserDetails' element={<UserDetails/>}> UserDetails </Route>

        <Route path='*' element= {< PageNotFound/>} />



      </Routes>

      {/* <button onClick={ () => navigate('/about')} > About</button>
      <button onClick={ () => navigate('/Home')} > Home</button>
      <button onClick={ () => navigate('/Contact')} > Contact</button> */}


      {/* <button onClick={ () => navigateabout('/about')} > About</button>
      <button onClick={ () => navigateabout('/Home')} > Home</button>
      <button onClick={ () => navigateabout('/Contact')} > Contact</button> */}


     
    </div>
  );  
}



export default App;
