import React from 'react';
import './Button.css';
import styles from './Button.module.css';

const Button: React.FC = ({ children }) => {
  return (
    <button className={`Button ${styles.success}`}>
      {children}
    </button>
  );
}

export default Button;
