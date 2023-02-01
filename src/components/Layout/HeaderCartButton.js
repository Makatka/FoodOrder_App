import {useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from  './HeaderCartButton.module.scss';
import { useSelector } from 'react-redux';


const HeaderCartButton = props => {
  const [btnIsHighLited, setBtnIsHighLited] = useState(false);

  const items = useSelector(state => state.cart.items);
  const btnClasses = `${styles.button} ${btnIsHighLited ? styles.bump : ''}`;
  let numberOfCartItems = 0;

  for (const item of items){
    numberOfCartItems += item.amount
  }

  useEffect(() => {
    if(numberOfCartItems === 0){
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
      <p>Twoje zamówienie</p>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton