import styles from './Header.module.scss'
import {Fragment} from "react";
import mealsImage from '../../assets/meal.jpeg';
import userImage from '../../assets/user.jpeg';
import React from "react"
import HeaderCartButton from "./HeaderCartButton";
import FormSearch from "../Meals/FormSearch";
import Container from "./Container";


const Header = props => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>EasyMeals</h1>
          <div className={styles.wrapper}>
            <HeaderCartButton onClick={props.onShowCart}/>
            <img src={userImage} alt="Jan Kowalski" className={styles.userImage}/>
          </div>

        </div>
      </header>
      <div className={styles.mainImage}>
        <img src={mealsImage} alt="Fantastic meal." />
        <Container>
          <FormSearch />
        </Container>
      </div>
    </Fragment>
  )

}

export default Header