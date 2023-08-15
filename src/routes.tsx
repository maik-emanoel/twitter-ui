import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layouts/Default";
import { ErrorPage } from "./pages/ErrorPage";
import { Notifications } from "./pages/Notifications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Timeline />,
      },
      {
        path: "/status",
        element: <Status />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
        children: [
          {
            path: "/notifications/verified",
            element: <h1>Olá</h1>,
          },
          {
            path: "/notifications/mentions",
            element: <h1>Oi</h1>,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
