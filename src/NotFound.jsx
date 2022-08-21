import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Sorry this page don't exist</p>
      <Link to='/'>Go to Home ...</Link>
    </div>
  );
};

export default NotFound;
