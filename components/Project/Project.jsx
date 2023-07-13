import { ProjectList } from './ProjectList/ProjectList';
import styles from './Project.module.css';
const Project = () => {
  return (
    <div className={styles.project}>
      <div
        className={styles.title}
        id="project"
      >
        Проекты
      </div>
      <ProjectList />
    </div>
  );
};

export { Project };
