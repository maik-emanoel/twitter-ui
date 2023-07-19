import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Bottombar } from "../components/Bottombar";
import { Pencil } from "@phosphor-icons/react";

export function Default() {
    return (
        <div className="mx-auto max-w-[1000px] grid grid-cols-[300px_1fr] md:grid-cols-[80px_1fr] min-h-screen sm:grid-cols-1">
        <Sidebar />
        <Bottombar />
  
        <div className="border-l-[1px] border-r-[1px] border-grayBorder dark:border-grayBorderDark">
            <Outlet />
            <button className="fixed right-4 bottom-20 bg-twitterBlue w-14 h-14 rounded-full shadow-floatButton hidden sm:block">
                <Pencil size={24} color="white" className="mx-auto" />
            </button>
        </div>
      </div>
    )
}