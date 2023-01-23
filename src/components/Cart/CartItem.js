import styles from './CartItem.module.scss'
import {useDispatch} from "react-redux";
import {increaseCartItem, decreaseCartItem } from "../../redux/cartRedux";

const CartItem = props => {
  const dispatch = useDispatch()


  const increaseAmountHandler = () => {
    dispatch(increaseCartItem(props.itemId))
  }


  const decreaseAmountHandler = () => {
    dispatch(decreaseCartItem(props.itemId))
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
        <button onClick={decreaseAmountHandler}>-</button>
        <button onClick={increaseAmountHandler}>+</button>
      </div>
    </li>
  )
}

export default CartItem