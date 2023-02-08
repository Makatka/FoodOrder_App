import initialState from "./initialState"
import {strContains} from "../utils/strContains";


export const getFilteredMeals = ({meals, searchString}) =>
  meals.filter(mealItem => strContains(mealItem.name, searchString));

/* export const getTagsList = (meals) => {
  let tagsList = [];

  for (let meal of meals) {
   tagsList = [...tagsList, ...meal.tags]
  }

}
*/

const mealsReducer = (statePart = initialState.meals, action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default mealsReducer;