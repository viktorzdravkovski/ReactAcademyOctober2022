import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Posts, { loader as postsLoader } from "./pages/Posts";
import PostDetails, {loader as postLoader} from "./pages/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
        id: "posts",
        loader: postsLoader,
      },
      {
        path: "posts/:postId",
        element: <PostDetails />,
        loader: postLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
