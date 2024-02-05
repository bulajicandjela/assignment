import { Comment } from "../types/types";
import useApi from "./useApi";

const usePosts = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL as string;
  return useApi<Comment[]>(`${baseUrl}/comments`);
};

export default usePosts;
