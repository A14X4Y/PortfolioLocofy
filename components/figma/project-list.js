import CardProject from "./card-project";
import styles from "./project-list.module.css";
const ProjectList = () => {
  return (
    <div className={styles.projectlist}>
      <CardProject />
      <div className={styles.cardproject}>
        <img
          className={styles.projectimageIcon}
          alt=""
          src="/projectimage@2x.png"
        />
        <div className={styles.titlecard}>{`Pics to words `}</div>
        <div
          className={styles.text}
        >{`Игра на запомниние слов и картитинок на иностранном языке  `}</div>
        <div className={styles.buttonlinkstoproject}>
          <button className={styles.buttoncontained}>
            <div className={styles.textbutton}>Посмотреть</div>
          </button>
          <button className={styles.buttonoutline}>
            <div className={styles.textbutton1}>Репозиторий</div>
          </button>
        </div>
      </div>
      <div className={styles.cardproject1}>
        <img
          className={styles.projectimageIcon1}
          alt=""
          src="/projectimage1@2x.png"
        />
        <div className={styles.titlecard}>Jobs listing</div>
        <div className={styles.text1}>
          Сайт с поиском сотрудником с фильтрацией
        </div>
        <div className={styles.buttonlinkstoproject}>
          <button className={styles.buttoncontained1}>
            <div className={styles.textbutton1}>Посмотреть</div>
          </button>
          <button className={styles.buttonoutline}>
            <div className={styles.textbutton1}>Репозиторий</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
