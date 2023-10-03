import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layouts/Default";
import { ErrorPage } from "./pages/ErrorPage";
import { Notifications } from "./pages/Notifications";

import {
  DefaultNotification,
  Verified,
  Mentions,
} from "./pages/subpages/NotificationSections";
import { Messages } from "./pages/Messages";
import { Profile } from "./pages/Profile";
import { initialUser } from "./initialUser";

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
        path: "/status/:id",
        element: <Status />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
        children: [
          {
            path: "/notifications/",
            element: <DefaultNotification />,
          },
          {
            path: "/notifications/verified",
            element: <Verified />,
          },
          {
            path: "/notifications/mentions",
            element: <Mentions />,
          },
        ],
      },
      {
        path: "/messages",
        element: <Messages />
      },
      {
        path: `/${initialUser.login}`,
        element: <Profile />
      }
    ],
    errorElement: <ErrorPage />,
  },
]);
