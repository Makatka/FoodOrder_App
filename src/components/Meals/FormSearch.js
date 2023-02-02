import styles from './FormSearch.module.scss'



const FormSearch = () => {

  const submitHandler = e => {
    e.preventDefault();
    console.log("Wyszukaj")
  }

return <form className={styles.searchWrapper} onSubmit={submitHandler}>


  <input type="text" placeholder={'Na co masz dzisiaj ochotę...'}/>

</form>
}


export default FormSearch