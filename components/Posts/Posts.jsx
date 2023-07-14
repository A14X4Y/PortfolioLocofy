import { gql,  useQuery } from '@apollo/client';
import { client } from '../../apolloClient';
import styles from "./Posts.module.css"
import {Post} from "./Post/Post"
import Link from "next/link"

const GET_POSTS = gql`
  query Posts {
    posts {
      id
      title
      tagsCount
      content {
        document
      }
    }
  }
`;

export const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS, { client });
  console.log(data);
  console.log(loading);

  return <>
    <div className={styles.posts}>
    <div
        className={styles.title}
        id="project"
      >
        Посты
      </div>
    <div className = {styles.postList}>
      {!loading && 
      data?.posts?.map((post, index) =>{
        return <Link href = {`post/${post.id}`}><Post postInfo = {post} key = {index}/></Link>
      })
      }
    </div>
      </div>
  </>;
};
