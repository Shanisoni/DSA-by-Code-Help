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
import UserDetails from './Component/Users';
import UserPage from './Component/UserPage';
import Users from './Component/Users';





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




        <Route path='/Users' element={<Users/>}>

        <Route path='user/1' element={<UserPage/>}/>

        </Route>

        <Route path='user/1' element={<UserPage/>}/>

        <Route path='user/2' element={<UserPage/>}/>

        <Route path='user/3' element={<UserPage/>}/>



        

        {/* <Route path='/Users' element={<Users/>}>
           <Route path='1' element={<UserPage/>}/>
           <Route path='user/2' element={<UserPage/>}/>
           <Route path='user/3' element={<UserPage/>}/>
           <Route path='user/4' element={<UserPage/>}/>
        </Route> */}

        
        {/* <Route path='user/2' element={<UserPage/>}/>
        <Route path='user/3' element={<UserPage/>}/>
        <Route path='user/4' element={<UserPage/>}/> */}


        {/* <Route path='/UserDetails' element={<UserDetails/>}> 

        <Route path='user/1' element={<UserPage/>}/>

       
        </Route> */}

        

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
