import mealImage from '../../../assets/meal_1.jpeg';
import styles from './MealItem.module.scss'
import MealItemForm from "./MealItemForm";

const Mealitem = props => {
  return (
    <li className={styles.mealItem}>

      <img src={mealImage} alt={props.name} className={styles.mealImage}/>
      <div className={styles.mealDescription}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span className={styles.price}>{props.price} zł</span>
      </div>
      <MealItemForm id={props.id}/>


    </li>
  )
}

export default Mealitem