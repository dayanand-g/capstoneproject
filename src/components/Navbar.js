import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="nav bg-white p-5 border-b-2 border-gray-300 drop-shadow-md">
        <img src={logo} alt="Logo" className="w-36 mx-5" />
      </div>
    </div>
  );
};

export default Navbar;
