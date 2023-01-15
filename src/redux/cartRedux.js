import initialState from "./initialState";

const createActionName = actionName => `app/lists/${actionName}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const SUBMIT_ORDER = createActionName('SUBMIT_ORDER');
const CART_TOTAL_AMOUNT = createActionName('CART_TOTAL_AMOUNT');

export const addToCart = payload => ({type: ADD_TO_CART, payload});
export const removeFromCart = payload => ({type: REMOVE_FROM_CART, payload});
export const submitOrder = payload => ({type: SUBMIT_ORDER, payload});
export const upddateTotalAmount = payload => ({type: CART_TOTAL_AMOUNT, payload});

const cartReducer = (statePart = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return  [...statePart.items, action.payload];

    case REMOVE_FROM_CART:
      return [...statePart.items.filter(item => (item.id !== action.payload))];

    case SUBMIT_ORDER:
      return statePart
    case CART_TOTAL_AMOUNT:
      return statePart.totalAmount = action.payload;

    default:
      return statePart;
  }
  ;
}


export default cartReducer;