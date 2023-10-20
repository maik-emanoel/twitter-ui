import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Bottombar } from "../components/Bottombar";
import { SidebarProvider } from "../context/SidebarContext";
import { TweetProvider } from "../context/TweetContext";
import { ScrollDirectionProvider } from "../context/ScrollContext";
import { useUser } from "../context/UserContext";
import { useEffect } from "react";
import { saveHasUser } from "../utils/hasUserUtils";

export function Default() {
  const { userInfo, hasUser, setHasUser } = useUser();

  useEffect(() => {
    if (userInfo.login === '') {
      setHasUser(false);
      saveHasUser(false)
    }
  }, [userInfo, setHasUser]);

  if (hasUser === null || !hasUser) {
    return <Navigate to='/flow/' />
  }

  return (
    <div className="mx-auto max-w-[1000px] grid grid-cols-[300px_1fr] md:grid-cols-[80px_1fr] min-h-screen sm:grid-cols-1">
      <TweetProvider>
        <SidebarProvider>
          <ScrollDirectionProvider>
            <Sidebar />

            <div className="border-l border-r border-grayBorder dark:border-grayBorderDark sm:border-none">
              <Outlet />
            </div>

            <Bottombar />
          </ScrollDirectionProvider>
        </SidebarProvider>
      </TweetProvider>
    </div>
  );
}
