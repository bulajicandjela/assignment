import React from "react";
import styles from "./Post.module.scss";
import withLogging from "../hocs/withLogging";

interface PostProps {
  title: string;
  body: string;
}

const Post: React.FC<PostProps> = ({ title, body }) => {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

Post.displayName = "Post";
export default withLogging(Post);
