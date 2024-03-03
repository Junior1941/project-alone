import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import useAuth from "../hooks/useAuth";
import Forgotpassword from "../pages/Forgotpassword";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import NavBarcart from "../components/NavBarcart";
import  Profile  from "../pages/Profile";


const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Landing /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
      { path: "/forgotpassword", element: <Forgotpassword /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {" "}
       
        <NavBarcart />
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Navigate to="/" /> },
      { path: "/register", element: <Navigate to="/" /> },
      { path: "/forgotpassword", element: <Forgotpassword /> },
      { path: "/home", element: <Home /> },
      { path: "/product", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/profile", element: <Profile/>},

    ],
  },
]);

export default function AppRouter() {
  const { user } = useAuth();
  const finalRouter = user?.id ? userRouter : guestRouter;
  return <RouterProvider router={finalRouter} />;
}
