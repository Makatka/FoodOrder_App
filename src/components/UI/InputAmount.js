import React from "react";
import styles from './Input.module.scss';
import {clsx} from "clsx";

const InputAmount = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id} >{props.label}</label>
      <input className={clsx(props.className)} ref={ref} {...props.input} />
    </div>
  )
});

export default InputAmount