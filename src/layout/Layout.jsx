import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Topbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
