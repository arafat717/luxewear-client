import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import ProductDetails from "./Ui/ProductDetails";
import Cart from "./Ui/Cart";
import PrivateRoute from "./PrivateRoute";
import WishList from "./pages/WishList";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";

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
        path: "myorder",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "wishlist",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/aboutus",
        element: <AboutPage></AboutPage>,
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
