import styles from './TagsList.module.scss'
const TagsList = () => {
  return (
      <ul className={styles.list}>
        <li>Bezpłatna dostawa</li>
        <li>Rabaty</li>
        <li>Lunch</li>
        <li>Kolacja</li>
        <li>Deser</li>
      </ul>
  )
}

export default TagsList