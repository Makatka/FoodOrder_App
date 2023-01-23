import initialState from "./initialState";

const createActionName = actionName => `app/lists/${actionName}`;


const ADD_TO_CART = createActionName('ADD_TO_CART');
const SUBMIT_ORDER = createActionName('SUBMIT_ORDER');
const CART_TOTAL_AMOUNT = createActionName('CART_TOTAL_AMOUNT');
const INCREASE_CART_ITEM = createActionName('INCREASE_CART_ITEM');
const DECREASE_CART_ITEM = createActionName('DECREASE_CART_ITEM');

export const addToCart = payload => ({type: ADD_TO_CART, payload});
export const submitOrder = payload => ({type: SUBMIT_ORDER, payload});
export const updateTotalAmount = payload => ({type: CART_TOTAL_AMOUNT, payload});
export const increaseCartItem = payload => ({type: INCREASE_CART_ITEM, payload});
export const decreaseCartItem = payload => ({type: DECREASE_CART_ITEM, payload});

const recalculateTotalPrice = (items) => {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.amount * item.price;
  });
  return totalPrice.toFixed(2);
};

const cartReducer = (statePart = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:

     for (const item of statePart.items){
       if (item.id === action.payload.id){
         item.amount += action.payload.amount;
         return {...statePart};
       }
     }
      return {...statePart,
        items: [...statePart.items, action.payload],
        totalAmount: recalculateTotalPrice(statePart.items)}


    case INCREASE_CART_ITEM:
      for (const item of statePart.items) {
        if(item.id === action.payload) {
          item.amount ++
        }
      }
      return {...statePart, totalAmount: recalculateTotalPrice(statePart.items)};

    case DECREASE_CART_ITEM:
      for (const item of statePart.items){
        if(item.id === action.payload) {
          if(item.amount > 0){
            item.amount --
          }
          if(item.amount === 0){
            statePart.items = [...statePart.items.filter(item => (item.id !== action.payload))]
          }
        }
      }
      return {...statePart, totalAmount: recalculateTotalPrice(statePart.items)}

    case SUBMIT_ORDER:
      return {...statePart, items: [], totalAmount: 0, orderSubmit: action.payload}

    default:
      return statePart;
  }
}


export default cartReducer;