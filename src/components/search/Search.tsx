import React, { ChangeEvent } from "react";
import styles from "./Search.module.scss";
import withLogging from "../hocs/withLogging";

interface SearchProps {
  searchTerm: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by user..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
};

Search.displayName = "Search";
export default withLogging(Search);
