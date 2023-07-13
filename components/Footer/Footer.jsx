import styles from './footer.module.css';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div
        className={styles.textfooter}
      >{`A14X4Y ©2023 Все права защищены `}</div>
    </div>
  );
};

export { Footer };
