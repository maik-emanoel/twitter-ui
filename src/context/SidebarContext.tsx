/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useContext, useState } from "react";
import { MobileSidebar } from "../components/MobileSidebar";

const SidebarContext = createContext<{
  handleShowMobileSidebar: () => void;
  handleHideMobileSidebar: () => void;
}>({
  handleShowMobileSidebar: () => {},
  handleHideMobileSidebar: () => {}
});

export function useSidebarContext() {
  return useContext(SidebarContext);
}

interface SidebarProviderProps {
    children: ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
    const [showMobileSidebar, setShowMobileSidebar] = useState(false)

    function handleShowMobileSidebar() {
        setShowMobileSidebar(true)
    }

    function handleHideMobileSidebar() {
        setShowMobileSidebar(false)
    }

    return (
        <SidebarContext.Provider value={{ handleShowMobileSidebar, handleHideMobileSidebar }}>
            {children}
            {showMobileSidebar && <MobileSidebar />}
        </SidebarContext.Provider>
    )
}