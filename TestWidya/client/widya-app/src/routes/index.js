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
      if (!localStorage.access_token) {
        return redirect("/login");
      } else {
        return null;
      }
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
        path: "editProducts",
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
      if (localStorage.access_token) {
        return redirect("/");
      } else {
        return null;
      }
    },
  },
  {
    path: "/register",
    element: <Register />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      } else {
        return null;
      }
    },
  },
]);

export default router;
