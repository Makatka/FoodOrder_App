import styles from './Meals.module.scss';
import MealItem from './MealItem/MealItem'
import { useSelector } from 'react-redux';
import {getFilteredMeals} from "../../redux/mealsRedux";

const Meals = () => {
  const meals = useSelector(state => getFilteredMeals(state));


  const mealsList = meals.map(meal => <MealItem
    key={meal.id}
    id={meal.id}
    name={meal.name}
    price={meal.price}
    description={meal.description}
    image={meal.imageUrl}

  />);
  return (
    <section className={styles.meals}>
        <ul>
          {mealsList}
        </ul>
    </section>
  )
}

export default Meals