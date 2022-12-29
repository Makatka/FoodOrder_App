import AvailableMeals from "./AvailableMeals";
import {Fragment} from "react";
import MealsFilter from "./MealsFilter";
import TagsList from "./TagsList";
import Container from "../Layout/Container";

const Meals = () => {
  return (
    <Fragment>
      <Container>
        <MealsFilter />
        <TagsList />
        <AvailableMeals />
      </Container>
    </Fragment>
  )
}

export default Meals