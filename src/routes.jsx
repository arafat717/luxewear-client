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
import AdminRoute from "./AdminRoute";
import WishDetails from "./Ui/WishDetails";

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
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/wish/:id",
        element: <WishDetails></WishDetails>,
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
    element: (
      <PrivateRoute>
        <MyAccount></MyAccount>
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <AccountDetails></AccountDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "address",
        element: (
          <PrivateRoute>
            <MyAddress></MyAddress>
          </PrivateRoute>
        ),
      },
      {
        path: "product-list",
        element: (
          <AdminRoute>
            <ProductPage></ProductPage>
          </AdminRoute>
        ),
      },
      {
        path: "admin-blog",
        element: (
          <AdminRoute>
            <BlogPageAdmin></BlogPageAdmin>
          </AdminRoute>
        ),
      },
      {
        path: "admin-instragram",
        element: (
          <AdminRoute>
            <InstragramPage></InstragramPage>
          </AdminRoute>
        ),
      },
      {
        path: "admin-product-add",
        element: (
          <AdminRoute>
            <ProductAdd></ProductAdd>
          </AdminRoute>
        ),
      },
      {
        path: "admin-all-users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
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
