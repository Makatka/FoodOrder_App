import { useRef} from "react";
import styles from './CartForm.module.scss'
import {useDispatch} from "react-redux";
import {sendOrder} from "../../redux/cartRedux";
import InputOrderForm from "../UI/InputOrderForm";
import Button from "../UI/Button";
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
  }


  return (
    <form className={styles.detailsForm} onSubmit={formSubmissionHandler}>


      <h1>Jeszcze tylko jeden krok </h1>
      <InputOrderForm ref={nameInputRef} input={{
        name: 'fullName',
        type: 'text',
        placeholder: 'Imię i nazwisko'

      }}/>
      <InputOrderForm ref={nameInputRef} input={{
        name: 'deliveryAddress',
        type: 'text',
        placeholder: 'Adres dostawy'

      }}/>
      <InputOrderForm ref={nameInputRef} input={{
        name: 'contactNumber',
        type: 'text',
        placeholder: 'Telefon kontaktowy'

      }}/>
      <InputOrderForm ref={nameInputRef} input={{
        name: 'deliveryDetails',
        type: 'text',
        placeholder: 'Szczegóły dla dostawcy'
      }}/>


      <Button className={'button button--alt'}>Zamów</Button>
    </form>


  )
};

export default CartForm;