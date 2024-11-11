// ./store.js

import { createStore } from 'redux';
import rootReducer from './Reducers/Index';  // Correct path for the reducer

// Create the store
export const store = createStore(rootReducer);  // Named export




// import rootReducer from "./Reducers/Index";
// import { createStore } from "redux"; 


// const store = createStore(rootReducer); 