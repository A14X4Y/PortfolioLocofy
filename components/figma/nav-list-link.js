import { useCallback } from "react";
import NavItemLink from "./nav-item-link";
import styles from "./nav-list-link.module.css";
const NavListLink = () => {
  const onNavItemLink2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navItemLink2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavItemLink1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navItemLink1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavItemLinkClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navItemLink']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.navlistlink}>
      <NavItemLink
        navItemLink="Обо мне"
        onNavItemLink2Click={onNavItemLink2Click}
      />
      <NavItemLink
        navItemLink="Проекты"
        onNavItemLink2Click={onNavItemLink1Click}
        navItemLinkColor="#fff"
        navItemLinkTransition=".3s"
        navItemLinkDisplay="inline-block"
      />
      <NavItemLink
        navItemLink="Контакты"
        onNavItemLink2Click={onNavItemLinkClick}
        navItemLinkColor="#fff"
        navItemLinkTransition=".3s"
        navItemLinkDisplay="inline-block"
      />
    </div>
  );
};

export default NavListLink;
