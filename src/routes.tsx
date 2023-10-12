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
import { ProfilePosts } from "./pages/subpages/profileSections/ProfilePosts";
import { ProfileReplies } from "./pages/subpages/profileSections/ProfileReplies";
import { ProfileHighlights } from "./pages/subpages/profileSections/ProfileHighlights";
import { ProfileMedia } from "./pages/subpages/profileSections/ProfileMedia";
import { ProfileLikes } from "./pages/subpages/profileSections/ProfileLikes";
import { SignUp } from "./layouts/SignUp";

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
        element: <Profile />,
        children: [
          {
            path: `/${initialUser.login}`,
            element: <ProfilePosts />
          },
          {
            path: `/${initialUser.login}/with_replies`,
            element: <ProfileReplies />
          },
          {
            path: `/${initialUser.login}/highlights`,
            element: <ProfileHighlights />
          },
          {
            path: `/${initialUser.login}/media`,
            element: <ProfileMedia />
          },
          {
            path: `/${initialUser.login}/likes`,
            element: <ProfileLikes />
          }
        ]
      }
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <SignUp />
  }
]);
