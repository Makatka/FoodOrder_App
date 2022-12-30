
import {useContext} from "react";
import mealImage from '../../../assets/meal_1.jpeg';
import styles from './MealItem.module.scss'
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const Mealitem = props => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = amount => {
  cartContext.addItem({
    id: props.id,
    name: props.name,
    amount: amount,
    price: props.price
  })
  };
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

export default Mealitem