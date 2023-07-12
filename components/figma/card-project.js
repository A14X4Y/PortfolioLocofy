import styles from "./card-project.module.css";
const CardProject = () => {
  return (
    <div className={styles.cardproject}>
      <div className={styles.projectimage}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.imagebackground} />
      </div>
      <div className={styles.titlecard}>{`Countries `}</div>
      <div className={styles.text}>
        Создание сайта с краткой информацией о каждой стране
      </div>
      <div className={styles.buttonlinkstoproject}>
        <button className={styles.buttoncontained}>
          <div className={styles.textbutton}>Посмотреть</div>
        </button>
        <button className={styles.buttonoutline}>
          <div className={styles.textbutton}>Репозиторий</div>
        </button>
      </div>
    </div>
  );
};

export default CardProject;
