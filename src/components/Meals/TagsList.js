import styles from './TagsList.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {updateSearchTag} from "../../redux/searchStringRedux";
import {clsx} from "clsx";

const TagsList = () => {
  const dispatch = useDispatch();
  const meals = useSelector(state => state.meals);
  const activeTag = useSelector(state => state.searchString.tag);

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


  const filterByTagHandler = (e) => {
    const searchTag = e.target.textContent.replace('#', '');
    dispatch(updateSearchTag(searchTag))
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
    const classNumber = Math.floor(percentage * (tagSizes - 1) + 1);

    return classNumber
  };

  const tagList = uniqueTags.map(tag =>
    <li
      key={uniqueTags.indexOf(tag)}
      className = {clsx(styles[`tagSize${calculateTagClass(allTags[tag], tagsParams)}`], (activeTag === tag) && styles.activeTag)}
      onClick={filterByTagHandler}
    >#{tag}

    </li>);

  return (
    <ul className={styles.list}>
      {tagList}
    </ul>
  )
}

export default TagsList