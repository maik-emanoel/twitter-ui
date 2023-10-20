import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
import { ProfilePosts } from "./pages/subpages/profileSections/ProfilePosts";
import { ProfileReplies } from "./pages/subpages/profileSections/ProfileReplies";
import { ProfileHighlights } from "./pages/subpages/profileSections/ProfileHighlights";
import { ProfileMedia } from "./pages/subpages/profileSections/ProfileMedia";
import { ProfileLikes } from "./pages/subpages/profileSections/ProfileLikes";
import { Flow } from "./layouts/Flow";
import { Signup } from "./layouts/Signup";
import { useUser } from "./context/UserContext";

export function AppRoutes() {
  const { userInfo } = useUser();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Timeline />} />
          <Route path="/status/:id" element={<Status />} />
          <Route path="/notifications" element={<Notifications />}>
            <Route index element={<DefaultNotification />} />
            <Route path="verified" element={<Verified />} />
            <Route path="mentions" element={<Mentions />} />
          </Route>
          <Route path="messages" element={<Messages />} />
          <Route path={userInfo.login} element={<Profile />}>
            <Route index element={<ProfilePosts />} />
            <Route path="with_replies" element={<ProfileReplies />} />
            <Route path="highlights" element={<ProfileHighlights />} />
            <Route path="media" element={<ProfileMedia />} />
            <Route path="likes" element={<ProfileLikes />} />
          </Route>
        </Route>
        <Route path="/flow" element={<Flow />}>
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
