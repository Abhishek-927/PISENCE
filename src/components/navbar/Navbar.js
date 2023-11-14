import React, { useState } from "react";
import { MdOutlineSort } from "react-icons/md";
import { PiNotebookFill } from "react-icons/pi";
import { LiaBarsSolid } from "react-icons/lia";
import { BiCctv, BiHome } from "react-icons/bi";
import "./navbar.css";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div className="icon" onClick={() => setIsopen(!isopen)}>
          <MdOutlineSort />
        </div>
      </div>
      {isopen && (
        <div>
          <div className="navbar-menu">
            <div className="pages">
              <BiHome className="icon" />
              <a href="/">Summary Dashboard</a>
            </div>
            <div className="pages">
              <LiaBarsSolid className="icon" />
              <a href="/">Attendance Tracking</a>
            </div>
            <div className="pages">
              <BiCctv className="icon" />
              <a href="/">Behavioral Analytics</a>
            </div>
            <div className="pages">
              <div className="icon">
                <PiNotebookFill />
              </div>
              <a href="/">Academic Performance Tracking</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
