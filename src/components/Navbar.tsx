// rafce

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav_Dropdown from "./Nav_Dropdown";
import { NavLink } from "react-router-dom";
import Heading from "./Heading";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../auth/AuthProvider";

const Navbar = () => {
  const [active, setActive] = useState("");
    const { user, login, logout } = useAuth();

  //   const googleLogin = useGoogleLogin({
  //   onSuccess: (tokenResponse) => {
  //     if (tokenResponse.credential) {
  //       login(tokenResponse.credential);
  //     }
  //   },
  //   onError: () => console.log("Login Failed"),
  // })

  return (
    <div>
      <nav className="navbar nav navbar-expand-lg">
        <div className="container-fluid">
          {/* Left Side - Title */}
          <a className="navbar-brand" href="/">
            <Heading>Kenbi's Imaginarium</Heading>
          </a>
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
              <li className="nav-item">
                  {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={user.picture}
              alt={user.name}
              style={{ width: "35px", borderRadius: "50%" }}
            />
            <button className="nav-link" onClick={logout}>Logout</button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(res) => {
              if (res.credential) login(res.credential);
            }}
            onError={() => console.log("Login Failed")}
          />
        )}
             
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
