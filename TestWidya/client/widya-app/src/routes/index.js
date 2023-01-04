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
      }
    },
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Register />,
      },
      {
        path: "register",
        element: <Register />,
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
      }
    },
  },
]);

export default router;
