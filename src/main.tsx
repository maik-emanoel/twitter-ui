import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Sidebar } from "./components/Sidebar";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="mx-auto max-w-[1000px] grid grid-cols-[300px_1fr]">
      <Sidebar />

      <div className="border-l-[1px] border-r-[1px] border-grayBorder">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
