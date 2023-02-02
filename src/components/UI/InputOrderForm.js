import styles from "../UI/InputOrderForm.module.scss";
import React from "react";

const InputOrderForm =  React.forwardRef((props, ref) => {
  return (
    <div className={styles.form}>
      <input type="text" ref={ref} name={props.input.name} autoComplete="off" required/>
      <label htmlFor={props.input.name} className={styles.labelName}>
        <span className={styles.contentName}>{props.input.placeholder}</span>
      </label>
    </div>
  )
})

export default InputOrderForm