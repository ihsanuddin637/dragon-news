import React from "react";
import logo from "/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), 'EEEE, MMMM MM, yyyy')}</p>
    </div>
  );
};

export default Header;
