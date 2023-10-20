import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { UserProvider } from "./context/UserContext";
import { AppRoutes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  </React.StrictMode>
);
