import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div
        className={styles.textfooter}
      >{`A14X4Y ©2020 Все права защищены `}</div>
    </div>
  );
};

export default Footer;
