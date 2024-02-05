import { PostWithComments } from "../types/types";
import useApi from "./useApi";

const usePostDetails = (postId: string) => {
  const baseUrl = import.meta.env.VITE_BASE_URL as string;
  const postUrl = `${baseUrl}/posts/${postId}?_embed=comments`;

  const { data: post, error: postError } = useApi<PostWithComments>(postUrl);

  return { data: post, error: postError };
};

export default usePostDetails;
