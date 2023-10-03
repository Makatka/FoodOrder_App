import styles from './MealItem.module.scss'
import MealItemForm from "./MealItemForm";


const MealItem = props => {
  const tagList =  props.tags.map(tag => <small>#{tag}</small>)


  return (
    <li className={styles.mealItem}>
      <img src={props.image} alt={props.name} className={styles.mealImage}/>
      <div className={styles.mealDescription}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span className={styles.price}>{props.price} zł</span>
      </div>
      <MealItemForm id={props.id} name={props.name} price={props.price} />
      <div className={styles.tags}>
        {tagList}

      </div>

    </li>
  )
}

export default MealItem