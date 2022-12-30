import {useContext} from "react";
import styles from './Cart.module.scss';
import Modal from '../UI/Modal';
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = props => {
  const cartContext = useContext(CartContext);
  const totalAmount = cartContext.totalAmount.toFixed(2);
  const hasItems = cartContext.items.length > 0;
  const cartItemRemoveHandler = id => {
    cartContext.removeItem(id);
  };
  const cartItemAddHandler = item => {
    cartContext.addItem({...item, amount:1});
  }

  const cartItems = (<ul className={styles.cartItems}>{cartContext.items.map(
    (item) => <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  )}</ul>)

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Koszt zamówienia</span>
        <span>{totalAmount} zł</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClose}>Zamknij</button>
        {hasItems && <button className={styles.button}>Zamów</button>}
      </div>
    </Modal>
  )
}

export default Cart