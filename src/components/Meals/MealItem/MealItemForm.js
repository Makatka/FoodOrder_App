import {useRef, useState} from "react";
import styles from './MealItemForm.module.scss';
import Input from "../../UI/Input";
import {useDispatch} from 'react-redux'
import {addToCart, updateTotalAmount} from "../../../redux/cartRedux";

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = + enteredAmount;

    dispatch(addToCart({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: enteredAmountNumber,
    } ))



    if(enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5){
      setAmountIsValid(false);
    }

  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input label="Ilość:" ref={amountInputRef} input={{

        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      }}/>
      <button>Dodaj</button>
      {!amountIsValid  && <p>Proszę wprowadź poprawną ilość (1-5).</p>}
    </form>
  )
};

export default MealItemForm