import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Bottombar } from "../components/Bottombar";
import { SidebarProvider } from "../context/SidebarContext";
import { TweetProvider } from "../context/TweetContext";
import { ScrollDirectionProvider } from "../context/ScrollContext";

export function Default() {
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
