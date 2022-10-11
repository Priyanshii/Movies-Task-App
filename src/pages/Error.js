import React from "react";
import { AppContext } from "../context";
import { Link } from "react-router-dom";
const Error = () => {
  const { error } = React.useContext(AppContext);
  return (
    <div>
      <p>{error.msg}</p>
      <Link to={"/"}> Back to home</Link>
    </div>
  );
};

export default Error;
