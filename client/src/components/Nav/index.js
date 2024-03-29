import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="nav-link" href="https://www.google.com/">Search<span className="sr-only">(current)</span></a>
      <a className="nav-link" href="https://www.google.com/">Saved</a>

    </nav>
  );
}

export default Nav;