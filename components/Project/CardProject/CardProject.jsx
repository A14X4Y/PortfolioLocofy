import styles from './CardProject.module.css';
import { Button } from '../../UI/Button/Button';
// {
//   title: 'Countries',
//   image: '/image@2x.png',
//   description: 'Создание сайта с краткой информацией о каждой стране',
//   repository: "",
//   site: ""
// },

const CardProject = ({ projectInfo }) => {
  const { title, description, image, repository, site } = projectInfo;

  return (
    <div className={styles.cardproject}>
      <div className={styles.projectimage}>
        <img
          className={styles.imageIcon}
          alt=""
          src={image}
        />
        <div className={styles.imagebackground} />
      </div>
      <div className={styles.titlecard}>{title}</div>
      <div className={styles.text}>{description}</div>
      <div className={styles.buttonlinkstoproject}>
        <Button
          variant="contained"
          onClick={() => window.location.assign(site)}
        >
          Посмотреть
        </Button>

        <Button
          variant="outline"
          onClick={() => window.location.assign(repository)}
        >
          Репозиторий
        </Button>
      </div>
    </div>
  );
};

export { CardProject };
