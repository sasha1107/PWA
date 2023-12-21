import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "pages/home";
import PushHistory from "pages/push";
import { Layout } from "components";

export const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
        name: "Home",
      },
      {
        path: "/push",
        element: <PushHistory />,
        name: "Push",
      },
    ],
  },
]);
