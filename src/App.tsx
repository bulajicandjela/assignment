import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Posts from "./pages/posts/Posts";
import PostDetails from "./pages/postDetails/PostDetails";
import * as ROUTES from "./constants";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.ROUTE_HOME} element={<Navigate to="/posts" />} />
        <Route path={ROUTES.ROUTE_POSTS} element={<Posts />} />
        <Route path={ROUTES.ROUTE_POST_DETAILS} element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
