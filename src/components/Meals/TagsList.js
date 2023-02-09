import styles from './TagsList.module.scss'
import {useSelector} from "react-redux";
import {clsx} from "clsx";
//import {getTagsList} from "../../redux/

const TagsList = () => {

  const meals = useSelector(state => state.meals);

  let allTags = [];
  let uniqueTags = [];

  for (let meal of meals) {
    for (let tag of meal.tags) {
      if (!allTags.hasOwnProperty(tag)) {
        allTags[tag] = 1;
        uniqueTags.push(tag)
      } else {
        allTags[tag]++
      }
    }
  }

  const calculateTagsParams = (tags) => {
    const params = {
      min: 999999,
      max: 0,
    };
    for (let tag in tags) {
      params.max = Math.max(tags[tag], params.max);
      params.min = Math.min(tags[tag], params.min);
    }
    return params;
  }

  const tagsParams = calculateTagsParams(allTags);

  const calculateTagClass = (count, params) => {
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const tagSizes = 5;
    const classNumber = Math.floor( percentage * (tagSizes - 1) + 1 );

    return classNumber
  };

  const tagList = uniqueTags.map(tag => <li
    key={uniqueTags.indexOf(tag)}
    className = {styles[`tagSize${calculateTagClass(allTags[tag], tagsParams)}`]}


  >#{tag}</li>);

  return (
    <ul className={styles.list}>
      {tagList}
    </ul>
  )
}

export default TagsList