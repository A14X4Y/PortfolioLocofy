import React from 'react';
import styles from './Input.module.css';
import { classNames } from '../../../../lib/classNames';
const Input = ({
  register,
  label = '',
  type = 'text',
  name,
  errors,
  ...props
}) => {

  return (
    <div className={styles.inputWrapper}>
      <label
        className={styles.label}
        htmlFor={name}
      >
        {label}:
      </label>
      <input
        // name="name"
        id={name}
        name={name}
        className={classNames(styles.input, { [styles.error]: errors[name] })}
        type={type}
        {...register}
        {...props}
      />
      <div className = {styles.textError}>{errors[name] && errors[name].message}</div>
    </div>
  );
};

export { Input };
