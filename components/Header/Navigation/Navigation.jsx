import { useCallback } from 'react';
import { NavItem } from '../NavItem/NavItem';
import styles from './Navigation.module.css';
const Navigation = () => {
  const onNavItemLink2Click = useCallback(() => {
    const anchor = document.querySelector('#project');
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }, []);

  const onNavItemLink1Click = useCallback(() => {
    const anchor = document.querySelector('#project');
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }, []);

  const onNavItemLinkClick = useCallback(() => {
    const anchor = document.querySelector("#contact");
    if (anchor) {
      anchor.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className={styles.navlistlink}>
      <NavItem
        navItemLink="Обо мне"
        onNavItemLink2Click={onNavItemLink2Click}
        active
      />
      <NavItem
        navItemLink="Проекты"
        onNavItemLink2Click={onNavItemLink1Click}
      />
      <NavItem
        navItemLink="Контакты"
        onNavItemLink2Click={onNavItemLinkClick}
      />
    </div>
  );
};

export { Navigation };
