import {Fragment} from "react";
import styles from './CartForm.module.scss';
import deliveryImage from '../../assets/delivery.jpg'

const CartForm = (props) => {
  return (
    <Fragment>
      <section className={styles.formSection}>
        <form onSubmit={props.sendOrder}>
          <h1>Jeszcze tylko jeden krok </h1>
          <div className={styles.form}>
            <input type="text" name="name" autoComplete="off" required/>
            <label htmlFor="name" className={styles.labelName}>
              <span className={styles.contentName}>Imię i nazwisko</span>
            </label>
          </div>
          <div className={styles.form}>
            <input type="text" name="address" autoComplete="off" required/>
            <label htmlFor="address" className={styles.labelName}>
              <span className={styles.contentName}>Adres dostawy</span>
            </label>
          </div>
          <div className={styles.form}>
            <input type="text" name="phone" autoComplete="off" required/>
            <label htmlFor="phone" className={styles.labelName}>
              <span className={styles.contentName}>Telefon kontaktowy</span>
            </label>
          </div>
          <div className={styles.form}>
            <input type="text" name="info" autoComplete="off" required/>
            <label htmlFor="info" className={styles.labelName}>
              <span className={styles.contentName}>Informacje dla dostawcy</span>
            </label>
          </div>
        </form>
        <img src={deliveryImage} alt="deliverySend" className={styles.deliveryImage}/>
      </section>
    </Fragment>

  )
};

export default CartForm;