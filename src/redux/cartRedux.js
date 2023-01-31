import initialState from "./initialState";

const createActionName = actionName => `app/lists/${actionName}`;


const ADD_TO_CART = createActionName('ADD_TO_CART');
const SUBMIT_ORDER = createActionName('SUBMIT_ORDER');
const CART_TOTAL_AMOUNT = createActionName('CART_TOTAL_AMOUNT');
const INCREASE_CART_ITEM = createActionName('INCREASE_CART_ITEM');
const DECREASE_CART_ITEM = createActionName('DECREASE_CART_ITEM');
const CANCEL_ORDER = createActionName('CANCEL_ORDER');
const SEND_ORDER = createActionName('SEND_ORDER');

export const addToCart = payload => ({type: ADD_TO_CART, payload});
export const submitOrder = payload => ({type: SUBMIT_ORDER, payload});
export const sendOrder = payload => ({type: SEND_ORDER, payload});
export const updateTotalAmount = payload => ({type: CART_TOTAL_AMOUNT, payload});
export const increaseCartItem = payload => ({type: INCREASE_CART_ITEM, payload});
export const decreaseCartItem = payload => ({type: DECREASE_CART_ITEM, payload});
export const cancelOrder = payload => ({type: CANCEL_ORDER, payload});

const recalculateTotalPrice = (items) => {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.amount * item.price;
  });
  console.log(items)
  return totalPrice.toFixed(2);

};

const cartReducer = (statePart = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:

      for (const item of statePart.items) {
        if (item.id === action.payload.id) {
          item.amount += action.payload.amount
          return {...statePart,
            totalAmount: recalculateTotalPrice(statePart.items)
          };
        }
      }

      return {
        ...statePart,
        items: [...statePart.items, action.payload],
        totalAmount: recalculateTotalPrice( [...statePart.items, action.payload])
      }

    case INCREASE_CART_ITEM:
      for (const item of statePart.items) {
        if (item.id === action.payload) {
          item.amount++
        }
      }
      return {...statePart, totalAmount: recalculateTotalPrice(statePart.items)};

    case DECREASE_CART_ITEM:
      for (const item of statePart.items) {
        if (item.id === action.payload) {
          if (item.amount > 0) {
            item.amount--
          }
          if (item.amount === 0) {
            statePart.items = [...statePart.items.filter(item => (item.id !== action.payload))]
          }
        }
      }
      return {...statePart, totalAmount: recalculateTotalPrice(statePart.items)}

    case SUBMIT_ORDER:
      return {...statePart, order: {items: action.payload}}

    case CANCEL_ORDER:
      return {...statePart, items: [], totalAmount: 0}

    case SEND_ORDER:
      const result = {...statePart, totalAmount: 0};

      result.order = {...result.order, orderDetails: action.payload}
      return result;

    default:
      return statePart;
  }
}


export default cartReducer;