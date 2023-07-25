import React from "react";
import "./Navbar.css";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="pudhusu">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <div className="logo-dot">
            {/* <a className="navbar-brand" href="#"> */}
            <img className='app-logo-dot'
            src="/Zordlogo2.png"
            alt='' />
            {/* </a> */}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Home">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products">
                  <a className="nav-link" href="#Category">
                    Products
                    {/* <Collapse in={open}>
                      <div id="example-collapse-text">
                        <ul>
                          <div className="contents">
                            <li>Men</li>
                            <li>Women</li>
                            <li>All</li>
                          </div>
                        </ul>
                      </div>
                    </Collapse> */}
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  About
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <a href="" className="btn btn-outline-none ms-2">
                <i className="fa fa-search"></i>
              </a>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form> */}
            <div className="buttons">
              {/* <a href="#Cart" target="_blank" className="btn btn-outline-dark ms-2" onClick={handleShowCart}>
                  <i className="fa fa-shopping-cart me-1"></i>Cart(0)
                </a> */}
              <Link to="/cart">
                {/* <ul>
                  <a href="#" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i>Cart(0)
                  </a>
                </ul> */}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
