import React from "react";

import Sidebar from "../parts/layouts/Sidebar";

export default function Dashboard() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
