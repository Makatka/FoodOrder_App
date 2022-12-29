import CartIcon from "../Cart/CartIcon";
import styles from  './HeaderCartButton.module.scss';

const HeaderCartButton = props => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Twoje zamówienie</span>
      <span className={styles.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton