import {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from  './HeaderCartButton.module.scss';

const HeaderCartButton = props => {
  const cartContext = useContext(CartContext);
  const {items} = cartContext;
  const [btnIsHighLited, setBtnIsHighLited] = useState(false);
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighLited ? styles.bump : ''}`;

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnIsHighLited(true)
    const timer = setTimeout(() => {
      setBtnIsHighLited(false)
    }, 300);

    return () => {
      clearTimeout(timer)
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Twoje zamówienie</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton