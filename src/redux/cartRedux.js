import initialState from "./initialState";

const createActionName = actionName => `app/lists/${actionName}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const SUBMIT_ORDER = createActionName('SUBMIT_ORDER');
const CART_TOTAL_AMOUNT = createActionName('CART_TOTAL_AMOUNT');
const ADD_CART_ITEM = createActionName('ADD_CART_ITEM');
const REMOVE_CART_ITEM = createActionName('REMOVE_CART_ITEM');

export const addToCart = payload => ({type: ADD_TO_CART, payload});
export const removeFromCart = payload => ({type: REMOVE_FROM_CART, payload});
export const submitOrder = payload => ({type: SUBMIT_ORDER, payload});
export const updateTotalAmount = payload => ({type: CART_TOTAL_AMOUNT, payload});
export const addCartItem = payload => ({type: ADD_CART_ITEM, payload});
export const removeCartItem = payload => ({type: REMOVE_CART_ITEM, payload});

const cartReducer = (statePart = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let amount = 0;
      const items = [...statePart.items, action.payload];
      items.forEach((item) => {
        amount += item.amount * item.price;
      });

      return {items: items, totalAmount: amount.toFixed(2)}
    case ADD_CART_ITEM:

      let amount2 = 0;

      const items2 = statePart.items.filter(() => true);
      for (const item of items2) {
        if (item.id === action.payload) {
          item.amount++;
        }
        amount2 += item.amount * item.price;
      }

      return {
        items: items2,
        totalAmount: amount2
      };

    case REMOVE_CART_ITEM:
      for (const item of statePart.items) {
        if (item.id === action.payload.id) {
          item.amount--
        }
      }
      return [...statePart];

    case REMOVE_FROM_CART:
    //   return [...statePart.items.filter(item => (item.id !== action.payload))];

    default:
      return statePart;
  }
}


export default cartReducer;