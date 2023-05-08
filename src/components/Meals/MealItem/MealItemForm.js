import {useRef, useState} from "react";
import styles from './MealItemForm.module.scss';
import InputAmount from "../../UI/InputAmount";
import {useDispatch} from 'react-redux'
import {addToCart, updateTotalAmount} from "../../../redux/cartRedux";
import Button from "../../UI/Button";

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;


    if(enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5){
      setAmountIsValid(false);
      return;
    }

    dispatch(addToCart({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: enteredAmountNumber,
    } ))
  };
  return (
    <form className={styles.form}>
      <InputAmount className={'input--amount'} ref={amountInputRef} input={{

        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      }}/>
      <Button className={'button button--add'} onClick={submitHandler}>
        <span className={'fa fa-plus'}></span>
      </Button>
      {!amountIsValid  && <p>Proszę wprowadź poprawną ilość (1-5).</p>}
    </form>
  )
};

export default MealItemForm