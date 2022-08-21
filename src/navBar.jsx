import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Little Blog</h1>
      <div className="links">
        {/* / for home page */}
        <Link to="/">Home</Link>
        <Link
          to="/create"
          //   style={{
          //     color: "white",
          //     backgroundColor: "#f1356d",
          //     borderRadius: "8px",
          //   }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
