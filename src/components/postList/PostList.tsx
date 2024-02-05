import React from "react";
import { Link } from "react-router-dom";
import styles from "./PostList.module.scss";
import { PostWithComments } from "../../types/types";
import withLogging from "../hocs/withLogging";

interface PostListProps {
  posts: PostWithComments[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p className={styles.userName}>User: {post.user.name} </p>
          <p className={styles.commentsCount}>
            Comments: {post.comments.length}
          </p>
          <Link to={`/post/${post.id}`} className={styles.readMoreLink}>
            <button className={styles.readMoreButton}>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

PostList.displayName = "PostList";
export default withLogging(PostList);
