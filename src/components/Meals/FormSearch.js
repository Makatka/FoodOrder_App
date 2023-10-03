import styles from './FormSearch.module.scss'
import TextInput from "../UI/TextInput";
import { useDispatch  } from "react-redux";
import { useState } from "react"
import Button from "../UI/Button";
import {updateSearchString} from "../../redux/searchStringRedux";


const FormSearch = () => {
  const [searchMeal, setSearchMeal] = useState('');
  const dispatch = useDispatch();


  const submitHandler = e => {
    e.preventDefault();
    dispatch(updateSearchString(searchMeal));
  }

return <form className={styles.searchWrapper} onSubmit={submitHandler}>
  <TextInput  className={styles.searchInput} placeholder={"Wyszukaj..."} value={searchMeal} onChange={e => setSearchMeal(e.target.value)}/>
  <Button >
    <span className={'fa fa-search'}></span>
  </Button>
</form>
}


export default FormSearch