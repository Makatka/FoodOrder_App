import { createStore, combineReducers } from 'redux';
import initialState from "./initialState";
import cartReducer from './cartRedux'
import mealsReducer from "./mealsRedux";
import searchStringReducer from "./searchStringRedux";


const subreducers = {
  cart: cartReducer,
  meals: mealsReducer,
  searchString: searchStringReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;