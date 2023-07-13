import { CardProject } from '../CardProject/CardProject';
import styles from './ProjectList.module.css';
import useSWR from 'swr';
import axios from 'axios';
const fetcher = (...args) => axios(...args);
const ProjectList = () => {
  const { data, isLoading } = useSWR('/api/projects', fetcher);

  return (
    <div className={styles.projectlist}>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        data?.data?.map((projectInfo, index) => {
          return (
            <CardProject
              key={index}
              projectInfo={projectInfo}
            />
          );
        })
      )}
    </div>
  );
};

export { ProjectList };
