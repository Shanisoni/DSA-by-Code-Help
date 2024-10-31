import logo from './logo.svg';
import './App.css';
// import Comp1 from './Comp1';
// import Comp2 from './Comp2';

import React, {Suspense , Lazy} from 'react'
const Comp2 = Lazy(() => import('./Comp2'))
const Comp1 = Lazy(() => import('./Comp1')) 


function App() {
  return (
    <>
    <Comp1/>
    {/* <Comp2/>   */}
    <Suspense fallback={<div>Loading....</div>}>
      <Comp2/>
    </Suspense>

      




    </>
    
  );
}

export default App;
