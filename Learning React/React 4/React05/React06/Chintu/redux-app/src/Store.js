// ./store.js

import { createStore } from 'redux';
import rootReducer from './Reducers/Index';  // Correct path for the reducer

// Create the store
export const store = createStore(rootReducer);  // Named export
