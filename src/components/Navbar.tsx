// rafce

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav_Dropdown from "./Nav_Dropdown";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <div>
      <ul className="nav nav-underline justify-content-end">
        <li className="nav-item" onClick={() => setActive("")}>
          <NavLink className={"nav-link "} to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item" onClick={() => setActive("Blogs")}>
          <Nav_Dropdown />
        </li>
        <li className="nav-item" onClick={() => setActive("Poem")}>
          <NavLink
            className={"nav-link " + (active === "Poem" ? "active" : "")}
            to="/Poem"
          >
            Poems
          </NavLink>
        </li>
        <li className="nav-item" onClick={() => setActive("About")}>
          <NavLink
            to="/About"
            className={"nav-link " + (active === "About" ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item" onClick={() => setActive("Contact")}>
          <NavLink
            to="/Contact"
            className={"nav-link " + (active === "Contact" ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
