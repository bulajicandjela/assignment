import { Post } from "../types/types";
import useApi from "./useApi";

const usePosts = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL as string;
  const postsUrl = `${baseUrl}/posts?_expand=user`;

  const { data: posts, error: postsError } = useApi<Post[]>(postsUrl);

  return { data: posts, error: postsError };
};

export default usePosts;
