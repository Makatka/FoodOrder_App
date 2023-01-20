import styles from './Cart.module.scss';
import Modal from '../UI/Modal';
import CartItem from "./CartItem";
import {useSelector} from 'react-redux';

const Cart = props => {
  const cart = useSelector(state => state.cart);

  const hasItems = cart.items.length > 0;

  const cartItems = (<ul className={styles.cartItems}>{cart.items.map((item) => <CartItem
        itemId={item.id}
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
      />
    )}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Koszt zamówienia</span>
        <span>{cart.totalAmount} zł</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Zamknij</button>
        {hasItems && <button className={styles.button}>Zamów</button>}
      </div>
    </Modal>
  )
}

export default Cart