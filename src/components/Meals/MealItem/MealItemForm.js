import {useRef, useState} from "react";
import styles from './MealItemForm.module.scss';
import Input from "../../UI/Input";

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef();
  const submitHandler = e => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = + enteredAmount ;

    if(enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5){
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
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