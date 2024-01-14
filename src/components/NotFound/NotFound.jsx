import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="w-100">
    <h1 className="text-center">404 - Not Found!</h1>
    <button className="btn btn-primary mt-3 text-center">
      <Link className="text-light" to="/dashboard ">
        Go Back To Dashboard/Home{" "}
      </Link>
    </button>
  </div>
);

export default NotFound;
