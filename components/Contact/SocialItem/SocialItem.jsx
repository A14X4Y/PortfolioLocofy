import React from 'react';
import styles from './SocialItem.module.css';

const SocialItem = ({ socialInfo }) => {
  const { icon, name } = socialInfo;
  return (
    <img
      className={styles.icon}
      alt={name}
      src={icon}
    />
  );
};

export { SocialItem };
