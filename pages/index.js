import { useCallback } from 'react';
import { Hero } from '../components/Hero';
import { Project } from '../components/Project';
import { Header } from '../components/Header';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './index.module.css';
const LandingInit = () => {
  const onNavItemLink2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navItemLink2']");
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  const onNavItemLink1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navItemLink1']");
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  const onNavItemLinkClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navItemLink']");
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className={styles.landinginit}>
      <Header />
      <Hero />
      <Project />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default LandingInit;
