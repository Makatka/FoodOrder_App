import initialState from "./initialState"
import {strContains} from "../utils/strContains";


export const getFilteredMeals = ({meals, searchString}) =>
  meals.filter(mealItem => strContains(mealItem.name, searchString));

const mealsReducer = (statePart = initialState.meals, action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default mealsReducer;