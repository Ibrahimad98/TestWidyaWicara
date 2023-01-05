import { createBrowserRouter, RouterProvider, Route, redirect } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";
import AddForm from "../views/AddForm";
import EditForm from "../views/EditForm";
import Profile from "../views/Profile";
import Home from "../views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => {
      if (!sessionStorage.access_token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "addProducts",
        element: <AddForm />,
      },
      {
        path: "editProducts/:id",
        element: <EditForm />,
      },
      {
        path: "profiles",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (sessionStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
    loader: () => {
      if (sessionStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
]);

export default router;
