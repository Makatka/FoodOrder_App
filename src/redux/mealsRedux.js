import initialState from "./initialState";

export const getAllMeals = ({meals}) => meals;
const mealsReducer = (statePart = initialState.meals, action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default mealsReducer;