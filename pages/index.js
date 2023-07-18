import { useCallback } from "react";
import { Hero } from "../components/Hero";
import { Project } from "../components/Project";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Posts } from "../components/Posts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./index.module.css";

const LandingInit = () => {
  return (
    <div className={styles.landinginit}>
      <Header />
      <Hero />
      <Posts />
      <Project />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default LandingInit;
