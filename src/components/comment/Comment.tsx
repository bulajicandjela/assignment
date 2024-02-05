import React from "react";
import styles from "./Comment.module.scss";

interface CommentProps {
  name: string;
  email: string;
  body: string;
}

const Comment: React.FC<CommentProps> = ({ name, email, body }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <h4>{name}</h4>
        <p>({email})</p>
      </div>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
