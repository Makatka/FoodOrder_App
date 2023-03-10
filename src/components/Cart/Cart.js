import styles from './Cart.module.scss';
import Modal from '../UI/Modal';
import CartItem from "./CartItem";
import CartForm from "./CartForm";
import Button from "../UI/Button";
import deliveryImage from '../../assets/delivery.jpg'
import {useSelector, useDispatch} from 'react-redux';
import {submitOrder, cancelOrder} from "../../redux/cartRedux";
import {useState} from "react";

const Cart = props => {
  const cart = useSelector(state => state.cart);
  const [orderSended, setOrderSended] = useState(false);
  const [orderSubmit, setOrderSubmit] = useState(false);
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
  }


  const sendOrderHandler = (orderDetails) => {
    setOrderSended(true);

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
    dispatch(cancelOrder());
  }

  return (
    <Modal onClose={props.onClose}>
      {
        !orderSended && !orderSubmit && cartItems
      }
      {
        orderSubmit && !orderSended &&
        <CartForm sendOrder={sendOrderHandler}/>
      }
      {
        orderSended &&
        <div className={styles.orderInfo}>
          <p>Twoje zamówienie zostało wysłane do ralizacji</p>
          <img src={deliveryImage} alt="deliverySend" className={styles.deliveryImage}/>
        </div>
      }
      {
        !orderSended && <div className={styles.total}>
          <span>Razem</span>
          <span>{cart.totalAmount} zł</span>
        </div>
      }
      <div className={styles.actions}>
        {
          hasItems && !orderSubmit &&
          <Button className={'button button--alt orderBtn'} onClick={submitOrderHandler}>Zamów</Button>
        }
        {
          orderSubmit && !orderSended && <Button
            className={'button button--cancel'}
            onClick={orderCancelHandler}>Anuluj zamówienie</Button>
        }
        <Button className={'button button--alt'} onClick={props.onClose}>Zamknij</Button>
      </div>
    </Modal>
  )
}

export default Cart