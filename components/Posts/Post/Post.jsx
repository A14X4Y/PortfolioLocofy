import styles from "./Post.module.css"

export const Post =  ({postInfo}) =>{
  console.log(postInfo)
  return <div className = {styles.postCard}>{postInfo.title}</div>
}