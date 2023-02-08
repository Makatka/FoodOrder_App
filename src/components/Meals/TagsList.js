import styles from './TagsList.module.scss'
import {useSelector} from "react-redux";
//import {getTagsList} from "../../redux/mealsRedux";

const TagsList = () => {

  const meals = useSelector(state => state.meals);

  let allTags = [];
  for (let meal of meals) {
    allTags.push(...meal.tags)
  }

  const tagsList = [];

  console.log(allTags);
  for (let tag of allTags){
    let found = false;
    for (let elem of tagsList) {
      if(elem.name === tag) {
        elem.amount++
        found = true;
        break;
      }
    }

    if (!found) {
      tagsList.push({
        name: tag,
        amount: 1
      });
    }
  }






  return (
    <ul className={styles.list}>
      {tagsList.map(tag => <li>#{tag.name}</li>)}
    </ul>
  )
}

export default TagsList