import React from 'react';
import { classNames } from '../../../lib/classNames';
import cls from './Button.module.css';

// type Variant = "contained" | "outline"

const Button = ({
  className = 'default',
  variant,
  children,
  href,
  ...props
}) => {
  console.log(className);
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[variant]])}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
