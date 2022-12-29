import styles from './MealItemForm.module.scss';
import Input from "../../UI/Input";

const MealItemForm = props => {
  return(
    <form className={styles.form}>
      <Input label="Ilość:" input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        default: '1'
      }} />
      <button>Dodaj</button>
    </form>
  )
};

export default MealItemForm