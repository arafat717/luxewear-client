import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
