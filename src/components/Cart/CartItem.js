import styles from './CartItem.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addCartItem, removeCartItem} from "../../redux/cartRedux";

const CartItem = props => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.items);
  const handlerAddItem = () => {
    dispatch(addCartItem(props.itemId));
  }



  const handlerRemoveItem = () => {
    dispatch(removeCartItem(props.itemId))
  };

  return (
    <li className={styles.cartItem}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{props.price} zł</span>
          <span className={styles.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={styles.action}>
        <button onClick={handlerRemoveItem}>-</button>
        <button onClick={handlerAddItem}>+</button>
      </div>
    </li>
  )
}

export default CartItem