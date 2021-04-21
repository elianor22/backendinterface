import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">Admin</div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>
        <div className="sidebar-heading">Master</div>

        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link className="nav-link" to="/category">
            <i className="fas fa-fw fa-chart-area" />
            <span>Category</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/items">
            <i className="fas fa-fw fa-table" />
            <span>Items</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Member</div>
        <li className="nav-item">
          <Link className="nav-link" to="/member">
            <i className="fas fa-fw fa-chart-area" />
            <span>Member</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
