import { clsx } from 'clsx';
import styles from './Button.scss'

const Button = (props) => {
  return <button className={clsx(props.className)} onClick={props.onClick}>{props.children}</button>
}

export default Button;