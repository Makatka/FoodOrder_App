import {Fragment, useRef, useState} from "react";
import styles from './CartForm.module.scss';
import {useDispatch} from "react-redux";
import {sendOrder} from "../../redux/cartRedux";

const CartForm = (props) => {


  const dispatch = useDispatch();
  const nameInputRef = useRef();
  const detailsInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    props.sendOrder();
    let enteredFormDetails = {
      name: nameInputRef.current.value,
      number: phoneInputRef.current.value,
      address: addressInputRef.current.value,
      details: detailsInputRef.current.value
    }
    dispatch(sendOrder(enteredFormDetails))
    console.log('dziala')
  }


  return (
      <form onSubmit={formSubmissionHandler}>
        <h1>Jeszcze tylko jeden krok </h1>
        <div className={styles.form}>
          <input type="text" ref={nameInputRef} name="name" autoComplete="off" required/>
          <label htmlFor="name" className={styles.labelName}>
            <span className={styles.contentName}>Imię i nazwisko</span>
          </label>
        </div>
        <div className={styles.form}>
          <input type="text" ref={addressInputRef} name="address" autoComplete="off" required/>
          <label htmlFor="address" className={styles.labelName}>
            <span className={styles.contentName}>Adres dostawy</span>
          </label>
        </div>
        <div className={styles.form}>
          <input type="number" ref={phoneInputRef} name="phone" autoComplete="off" required/>
          <label htmlFor="phone" className={styles.labelName}>
            <span className={styles.contentName}>Telefon kontaktowy</span>
          </label>
        </div>
        <div className={styles.form}>
          <input type="text" ref={detailsInputRef} name="info" autoComplete="off" required/>
          <label htmlFor="info" className={styles.labelName}>
            <span className={styles.contentName}>Informacje dla dostawcy</span>
          </label>
        </div>
        <button className={styles.submitBtn} >Zamów</button>
      </form>


  )
};

export default CartForm;