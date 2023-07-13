import { Button } from '../UI/Button/Button';
import { useCallback } from 'react';
import styles from './Hero.module.css';
const Hero = () => {
  const onScrollToProject = useCallback(() => {
    const anchor = document.querySelector('#project');
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }, []);
  return (
    <div className={styles.herowrapper}>
      <div className={styles.hero}>
        <div className={styles.herotext}>
          <div className={styles.herotitletext}>
            <div className={styles.herosubtitle}>{`Привет, я `}</div>
            <div className={styles.herotitle}>Белоусов Алексей</div>
          </div>
          <div className={styles.description}>
            Я Fullstack-разработчик:) Cоздаю удобный веб-интерфейс для конечных
            пользователей.
          </div>
          <div className={styles.buttonscalltoaction}>
            <Button variant="contained">
              Обо мне
              <img
                className={styles.usericon}
                alt=""
                src="/usericon.svg"
              />
            </Button>
            <Button
              variant="outline"
              onClick={onScrollToProject}
            >
              Проекты
              <img
                className={styles.eyeicon}
                alt=""
                src="/eyeicon.svg"
              />
            </Button>
            {/* </button> */}
          </div>
        </div>
        <div className={styles.heroimage}>
          <div className={styles.background} />
          <img
            className={styles.myphotoIcon}
            alt=""
            src="/myphoto@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export { Hero };
