import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
   
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width={40}
                height={32}
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap" />
              </svg>
            </NavLink>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to="/" className="nav-link px-2 text-secondary">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/cf" className="nav-link px-2 text-white">
                  Codigo Facilito
                </NavLink>
              </li>
              <li>
                <NavLink to="/vr" className="nav-link px-2 text-white">
                  Victor Robles
                </NavLink>
              </li>
              <li>
                <NavLink to="/platzi" className="nav-link px-2 text-white">
                  Platzi
                </NavLink>
              </li>
              <li>
                <NavLink to="/youtube" className="nav-link px-2 text-white">
                  Youtube
                </NavLink>
              </li>
            </ul>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
