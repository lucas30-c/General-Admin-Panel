import React from "react";
import { Outlet } from "react-router-dom";

const main = () => {
  return <div>
    main
    {/* The exit of the children route */}
    <Outlet/>
  </div>;
};

export default main;
