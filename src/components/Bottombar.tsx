import { Bell, Envelope, House, MagnifyingGlass } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Bottombar() {
    return (
        <nav className="hidden fixed bottom-0 w-full h-14 bg-white border-t-[1px] border-grayBorder dark:bg-bodyDark dark:border-grayBorderDark sm:block">
            <div className="flex items-center h-full justify-around">
                <NavLink to="/"> 
                    <House size={24} weight="fill"/>
                </NavLink>
                <NavLink to="/"> 
                    <MagnifyingGlass size={24} />
                </NavLink>
                <NavLink to="/"> 
                    <Bell size={24} />
                </NavLink>
                <NavLink to="/"> 
                    <Envelope size={24} />
                </NavLink>
            </div>
        </nav>
    )
}