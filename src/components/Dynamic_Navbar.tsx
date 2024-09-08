// rafce

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface PageItem {
  name: string;
  component: React.FC;
}

interface Props {
  items?: PageItem[];
}

const Dynamic_Navbar = ({ items = [] }: Props) => {
  const [active, setActive] = useState("");
  return (
    <div>
      <nav className="nav nav-justified">
        {items.map((item, index) => (
          <NavLink
            key={index}
            onClick={() => setActive(item.name)}
            className={"nav-link " + (active === item.name ? "active" : "")}
            aria-current="page"
            to={"/" + item.name.toLowerCase()}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Dynamic_Navbar;
