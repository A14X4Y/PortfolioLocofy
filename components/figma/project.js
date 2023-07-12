import ProjectList from "./project-list";
import styles from "./project.module.css";
const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.title}>Проекты</div>
      <ProjectList />
    </div>
  );
};

export default Project;
