import styles from './MealItem.module.scss'
import MealItemForm from "./MealItemForm";


const MealItem = props => {


  return (
    <li className={styles.mealItem}>

      <img src={props.image} alt={props.name} className={styles.mealImage}/>
      <div className={styles.mealDescription}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span className={styles.price}>{props.price} zł</span>
      </div>
      <MealItemForm id={props.id} name={props.name} price={props.price} />
    </li>
  )
}

export default MealItem