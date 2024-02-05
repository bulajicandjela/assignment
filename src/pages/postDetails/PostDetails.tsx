import React from "react";
import styles from "./PostDetails.module.scss";
import { useParams } from "react-router-dom";
import usePostDetails from "../../hooks/usePostDetails";
import { Post } from "../../components/post";
import Comment from "../../components/comment/Comment";
import withLogging from "../../components/hocs/withLogging";

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, error } = usePostDetails(id || "");

  return (
    <div className={styles.postDetails}>
      {error && <p>Error fetching post: {error}</p>}

      <div className={styles.postDetails}>
        {post ? (
          <>
            <Post title={post.title} body={post.body} />
            <h3 className={styles.commentsHeading}>
              {post.comments
                ? `${post.comments.length} comments:`
                : "No comments"}
            </h3>
            {post.comments?.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

PostDetails.displayName = "PostsDetails";
export default withLogging(PostDetails);
