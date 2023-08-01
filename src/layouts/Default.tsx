import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Bottombar } from "../components/Bottombar";
import { SidebarProvider } from "../context/SidebarContext";

export function Default() {
  return (
    <div className="mx-auto max-w-[1000px] grid grid-cols-[300px_1fr] md:grid-cols-[80px_1fr] min-h-screen sm:grid-cols-1">
      <SidebarProvider>
        <Sidebar />

        <div className="border-l-[1px] border-r-[1px] border-grayBorder dark:border-grayBorderDark sm:border-none">
          <Outlet />
        </div>

        <Bottombar />
      </SidebarProvider>
    </div>
  );
}
