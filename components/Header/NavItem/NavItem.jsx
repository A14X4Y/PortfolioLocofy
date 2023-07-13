import { useMemo } from 'react';
import { classNames } from '../../../lib/classNames';
import styles from './NavItem.module.css';
const NavItem = ({
  navItemLink,
  onNavItemLink2Click,

  navItemLinkHref,
  active,
}) => {
  return (
    <a
      className={classNames(styles.navitemlink, { [styles.active]: active })}
      onClick={onNavItemLink2Click}
      href={navItemLinkHref}
    >
      {navItemLink}
    </a>
  );
};

export { NavItem };
