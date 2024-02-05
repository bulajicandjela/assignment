import React from "react";
import styles from "./Pagination.module.scss";
import withLogging from "../hocs/withLogging";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.pageNumber}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span
        className={styles.pageInfo}
      >{`${currentPage} of ${totalPages}`}</span>
      <button
        className={styles.pageNumber}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

Pagination.displayName = "Pagination";
export default withLogging(Pagination);
