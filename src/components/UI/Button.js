import styles from './Button.scss';
import { clsx } from 'clsx';

const Button = (props) => {
  return <button className={clsx(props.className)}>{props.children}</button>
}

export default Button;