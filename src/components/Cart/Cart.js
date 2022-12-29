import styles from './Cart.module.scss';
import Modal from '../UI/Modal';

const Cart = props => {
  const cartItems = <ul className={styles.cartItems}>{[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(
    (item) => <li>{item.name}</li>)}</ul>

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Koszt zamówienia</span>
        <span>35.62 zł</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClose}>Zamknij</button>
        <button className={styles.button}>Zamów</button>
      </div>
    </Modal>
  )
}

export default Cart