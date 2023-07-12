import { useCallback } from "react";
import NavListLink from "../components/figma/nav-list-link";
import Hero from "../components/figma/hero";
import Project from "../components/figma/project";
import Contact from "../components/figma/contact";
import Footer from "../components/figma/footer";
import styles from "./index.module.css";
const LandingInit = () => {
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
    <div className={styles.landinginit}>
      <header className={styles.header}>
        <NavListLink />
      </header>
      <Hero />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingInit;
