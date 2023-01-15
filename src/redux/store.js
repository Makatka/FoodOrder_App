import { createStore, combineReducers } from 'redux';
import initialState from "./initialState";
import cartReducer from './cartRedux'
import mealsReducer from "./mealsRedux";


const subreducers = {
  cart: cartReducer,
  meals: mealsReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;