import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function Default() {
    return (
        <div className="mx-auto max-w-[1000px] grid grid-cols-[300px_1fr] md:grid-cols-[80px_1fr] min-h-screen">
        <Sidebar />
  
        <div className="border-l-[1px] border-r-[1px] border-grayBorder dark:border-grayBorderDark">
            <Outlet />
        </div>
      </div>
    )
}