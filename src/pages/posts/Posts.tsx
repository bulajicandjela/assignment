import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import usePosts from "../../hooks/usePosts";
import styles from "./Posts.module.scss";
import PostList from "../../components/postList/PostList";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";
import { debounce } from "lodash";
import { useComments } from "../../hooks";
import { Comment } from "../../types/types";
import withLogging from "../../components/hocs/withLogging";

const Posts: React.FC = () => {
  const { data: comments, error: commentsError } = useComments();
  const { data: posts, error: postsError } = usePosts();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const postsPerPage = 5;

  const mapPostsToPostsWithComments = (comments: Comment[]) => {
    return posts?.map((post) => ({
      ...post,
      comments: comments.filter((comment) => comment.postId === post.id),
    }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setSearchTerm(term);
      setCurrentPage(1);
    }, 50),
    [setSearchTerm]
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    debouncedSearch(searchTerm);
  };

  const postsWithComments = mapPostsToPostsWithComments(comments || []);

  const filteredPosts = useMemo(() => {
    if (!postsWithComments) {
      return [];
    }

    return postsWithComments.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [postsWithComments, searchTerm]);

  const postsCount = filteredPosts.length;
  const totalPages = Math.ceil(postsCount / postsPerPage);
  const hasFilteredPosts = filteredPosts.length > 0;

  if (postsError || commentsError) {
    return <p>Error loading data.</p>;
  }

  if (!posts || !comments) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.postsContainer}>
      <h2>Posts</h2>
      <div className={styles.searchContainer}>
        <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      </div>
      <div className={styles.postListContainer}>
        {hasFilteredPosts && (
          <PostList
            posts={filteredPosts.slice(
              (currentPage - 1) * postsPerPage,
              currentPage * postsPerPage
            )}
          />
        )}
        {!hasFilteredPosts && <p>No posts found.</p>}
      </div>
      {hasFilteredPosts && (
        <div className={styles.paginationContainer}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

Posts.displayName = "Posts";
export default withLogging(Posts);
