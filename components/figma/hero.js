import styles from "./hero.module.css";
const Hero = () => {
  return (
    <div className={styles.herowrapper}>
      <div className={styles.hero}>
        <div className={styles.herotext}>
          <div className={styles.herotitletext}>
            <div className={styles.herosubtitle}>{`Привет, я `}</div>
            <div className={styles.herotitle}>Белоусов Алексей</div>
          </div>
          <div className={styles.herotext1}>
            Я Fullstack-разработчик:) Cоздаю удобный веб-интерфейс для конечных
            пользователей.
          </div>
          <div className={styles.buttonscalltoaction}>
            <button className={styles.buttoncontained}>
              <div className={styles.textbutton}>Обо мне</div>
              <img className={styles.usericon} alt="" src="/usericon.svg" />
            </button>
            <button className={styles.buttonoutline}>
              <div className={styles.textbutton}>Проекты</div>
              <img className={styles.eyeicon} alt="" src="/eyeicon.svg" />
            </button>
          </div>
        </div>
        <div className={styles.heroimage}>
          <div className={styles.background} />
          <img className={styles.myphotoIcon} alt="" src="/myphoto@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
