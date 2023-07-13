import React from 'react';
import styles from './SocialItem.module.css';

const SocialItem = ({ socialInfo }) => {
  const { icon, name, href } = socialInfo;
  return (
    <a href={href}>
      <img
        className={styles.icon}
        alt={name}
        src={icon}
      />
    </a>
  );
};

export { SocialItem };
