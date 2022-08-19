import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Little Blog</h1>
      <div className="links">
        {/* / for home page */}
        <a href="/">Home</a>
        <a
          href="/create"
        //   style={{
        //     color: "white",
        //     backgroundColor: "#f1356d",
        //     borderRadius: "8px",
        //   }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
