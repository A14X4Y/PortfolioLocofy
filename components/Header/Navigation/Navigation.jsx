import { useCallback } from 'react';
import { NavItem } from '../NavItem/NavItem';
import styles from './Navigation.module.css';
const Navigation = () => {

  const onScrollToProject = useCallback(() => {
    const anchor = document.querySelector('#project');
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }, []);

  const onScrollToContact = useCallback(() => {
    const anchor = document.querySelector("#contact");
    if (anchor) {
      anchor.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className={styles.navlistlink}>
      <NavItem
        navItemLink="Обо мне"
        onNavItemLink2Click={onScrollToProject}
        active
      />
      <NavItem
        navItemLink="Проекты"
        onNavItemLink2Click={onScrollToProject}
      />
      <NavItem
        navItemLink="Контакты"
        onNavItemLink2Click={onScrollToContact}
      />
    </div>
  );
};

export { Navigation };
