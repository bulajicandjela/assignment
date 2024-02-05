export interface User {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  user: User;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface PostWithComments extends Post {
  comments: Comment[];
}
