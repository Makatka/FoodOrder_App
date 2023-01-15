import mealImage from '../../../assets/meal_1.jpeg';
import styles from './MealItem.module.scss'
import MealItemForm from "./MealItemForm";
import {useDispatch} from 'react-redux';
import { addToCart } from  '../../../redux/cartRedux';


const MealItem = props => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(props))
  }


  return (
    <li className={styles.mealItem}>

      <img src={mealImage} alt={props.name} className={styles.mealImage}/>
      <div className={styles.mealDescription}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span className={styles.price}>{props.price} zł</span>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>


    </li>
  )
}

export default MealItem