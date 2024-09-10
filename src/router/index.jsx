import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../pages/main";
import Home from "../pages/home";
import User from "../pages/user";
import PageOne from "../pages/others/PageOne";
import PageTwo from "../pages/others/PageTwo";

const routes = [
  {
    path: "/",
    Component: Main,
    children: [
      // to redirect
      {
        path: "/",
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "user",
        Component: User,
      },
      {
        path: "other",
        children: [
          {
            path: "PageOne",
            Component: PageOne,
          },
          {
            path: "PageTwo",
            Component: PageTwo,
          },
        ],
      },
    ],
  },
];

export default createBrowserRouter(routes);
