import React from 'react';
import styles from './SoctalList.module.css';
import { socialList } from './data';
import { SocialItem } from '../SocialItem/SocialItem';

const SocialList = () => {
  return (
    <div className={styles.sociallist}>
      {socialList.map((item, index) => {
        return (
          <SocialItem
            key={index}
            socialInfo={item}
          />
        );
      })}
    </div>
  );
};

export { SocialList };
