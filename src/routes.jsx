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
import MyAccount from "./pages/MyAccount";
import AccountDetails from "./components/DashboardComponents/AccountDetails";
import MyOrders from "./components/DashboardComponents/MyOrders";
import MyAddress from "./components/DashboardComponents/MyAddress";
import ProductPage from "./pages/ProductPage";
import BlogPageAdmin from "./pages/BlogPageAdmin";
import InstragramPage from "./pages/InstragramPage";
import ProductAdd from "./pages/ProductAdd";
import AllUsers from "./pages/AllUsers";

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
  {
    path: "/myaccount",
    element: <MyAccount></MyAccount>,
    children: [
      {
        path: "",
        element: <AccountDetails></AccountDetails>,
      },
      {
        path: "orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "address",
        element: <MyAddress></MyAddress>,
      },
      {
        path: "product-list",
        element: <ProductPage></ProductPage>,
      },
      {
        path: "admin-blog",
        element: <BlogPageAdmin></BlogPageAdmin>,
      },
      {
        path: "admin-instragram",
        element: <InstragramPage></InstragramPage>,
      },
      {
        path: "admin-product-add",
        element: <ProductAdd></ProductAdd>,
      },
      {
        path: "admin-all-users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
