import initialState from "./initialState"
import {strContains, tagContains} from "../utils/strContains";


export const getFilteredMeals = ({meals, searchString}) => {

  if ((searchString.string === '' && searchString.tag === '') ||
    (searchString.string !== '' && searchString.tag === '')){
    return meals.filter(mealItem => strContains(mealItem.name, searchString.string));
  } else if (searchString.tag !== '' && searchString.string !== '') {
    return (
      meals.filter(mealItem => tagContains(mealItem.tags, searchString.tag)) &&
      meals.filter(mealItem => strContains(mealItem.name, searchString.string))
    );
  } else if (searchString !== '' && searchString.string === '') {
    return meals.filter(mealItem => tagContains(mealItem.tags, searchString.tag))
  } else
    return meals.filter(mealItem => strContains(mealItem.name, searchString.string));
}


const mealsReducer = (statePart = initialState.meals, action) => {
  switch (action.type) {
    default:
      return statePart;
  }

};

export default mealsReducer;