import styles from './Cart.module.scss';
import Modal from '../UI/Modal';
import CartItem from "./CartItem";
import CartForm from "./CartForm";
import deliveryImage from '../../assets/delivery.jpg'
import {useSelector, useDispatch} from 'react-redux';
import {submitOrder, cancelOrder, sendOrder} from "../../redux/cartRedux";
import {useState} from "react";

const Cart = props => {
  const cart = useSelector(state => state.cart);
  const [orderSended, setOrderSended] = useState(false);
  const [orderSubmit, setOrderSubmit] = useState(true);
  const dispatch = useDispatch();

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
  );

  const submitOrderHandler = () => {
    setOrderSubmit(true)
    dispatch(submitOrder(cart.items))
    console.log(cart.items)
  }


  const sendOrderHandler = (orderDetails) => {
    setOrderSended(true);
    console.log(cart)

    const timer = setTimeout(() => {
      setOrderSended(false);
      setOrderSubmit(false);
      props.onClose();
    }, 5000);

    return () => {
      clearTimeout(timer)
    }

  }

  const orderCancelHandler = () => {
    setOrderSubmit(false);
    dispatch(cancelOrder);
    console.log(cart.orderSubmit)
  }

  return (
    <Modal onClose={props.onClose}>

      {!orderSended && !orderSubmit && cartItems}

      {orderSubmit && !orderSended &&
        <CartForm sendOrder={sendOrderHandler}/>
      }
      {orderSended &&
        <div className={styles.orderInfo}>
        <p>Twoje zamówienie zostało wysłane do ralizacji</p>
        <img src={deliveryImage} alt="deliverySend" className={styles.deliveryImage}/>
      </div>
      }
      {!orderSended && <div className={styles.total}>
        <span>Razem</span>
        <span>{cart.totalAmount} zł</span>
      </div>}

      <div className={styles.actions}>
        {hasItems && !orderSubmit &&
          <button className={styles['button--alt']} onClick={submitOrderHandler}>Zamów</button>}

        {orderSubmit && <button
          className={styles['button--cancel']}
          onClick={props.onClose}>Anuluj zamówienie</button>
        }

        <button className={styles['button--alt']} onClick={props.onClose}>Zamknij</button>
      </div>

    </Modal>
  )
}

export default Cart