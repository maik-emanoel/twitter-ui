import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Link } from "../components/Link";

export function Notifications() {
  return (
    <>
      <Header title="Notifications" />
      <div className="flex h-[53px] items-center justify-around">
        <Link path="/notifications" name="All" />
        <Link path="/notifications/verified" name="Verified" />
        <Link path="/notifications/mentions" name="Mentions" />
      </div>
      <Outlet />
    </>
  );
}
