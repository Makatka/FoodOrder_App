import styles from './AvailableMeals.module.scss';
import Card from "../UI/Card";
import MealItem from './MealItem/MealItem'
import { useSelector } from 'react-redux';

const AvailableMeals = () => {
  const meals = useSelector((state) => state.meals);


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
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>

    </section>
  )
}

export default AvailableMeals