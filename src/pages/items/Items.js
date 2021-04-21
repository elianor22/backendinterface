import React, { useState } from "react";
import Modal from "./Modal";
import Table from "./Table";
import Sidebar from "../../parts/layouts/Sidebar";

export default function Items() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <h1>Items</h1>
            <button
              className="btn btn-primary "
              onClick={() => setIsOpen(true)}
            >
              Add Category
            </button>
            <div className="mt-3">
              <Table modalOpen={() => setIsOpen(true)} />
            </div>
          </div>
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} title={"items"} />
    </div>
  );
}
