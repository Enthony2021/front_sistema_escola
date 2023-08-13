// Combina todos os reducers antes de inserí-los do reducer store;
import { combineReducers } from "redux";

// Reducers
import exampleReducer from './example/reducer';

export default combineReducers({
  example: exampleReducer,
});

