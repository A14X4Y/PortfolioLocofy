import { useMemo } from "react";
import styles from "./nav-item-link.module.css";
const NavItemLink = ({
  navItemLink,
  onNavItemLink2Click,
  navItemLinkColor,
  navItemLinkTransition,
  navItemLinkDisplay,
  navItemLinkHref,
}) => {
  const navItemLinkStyle = useMemo(() => {
    return {
      color: navItemLinkColor,
      transition: navItemLinkTransition,
      display: navItemLinkDisplay,
    };
  }, [navItemLinkColor, navItemLinkTransition, navItemLinkDisplay]);

  return (
    <a
      className={styles.navitemlink}
      data-scroll-to="navItemLink2"
      onClick={onNavItemLink2Click}
      style={navItemLinkStyle}
      href={navItemLinkHref}
    >
      {navItemLink}
    </a>
  );
};

export default NavItemLink;
