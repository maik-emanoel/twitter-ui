import { ReactNode, createContext, useContext, useState } from "react";
import { MobileSidebar } from "../components/MobileSidebar";

const SidebarContext = createContext<{
  handleShowMobileSidebar: () => void;
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleShowMobileSidebar: () => {},
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

    return (
        <SidebarContext.Provider value={{ handleShowMobileSidebar }}>
            {children}
            {showMobileSidebar && <MobileSidebar />}
        </SidebarContext.Provider>
    )
}