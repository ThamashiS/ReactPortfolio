import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">About me</a>
          <a className="navbar-item">Skills</a>
          <a className="navbar-item">My work</a>
          <a className="navbar-item">Social</a>
          <a className="navbar-item">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
