import React from 'react';
import {NavLink } from 'react-router-dom';



function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light  border border-success border-top-0 border border-1 sticky-top">
    <div className="container-fluid">
        <NavLink className="navbar-brand text-danger fw-bolder bg-light" tabindex="-1" to="/">Tech2Words</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                    <NavLink className="nav-NavLink active bg-light fw-normal fs-5 text-dark w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-blue" tabindex="-1"  aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-NavLink bg-light text-dark fw-normal fs-5 w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-blue" tabindex="-1"  to="/about">About</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-NavLink  bg-light text-dark  fw-normal fs-5 w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-blue" tabindex="-1"  to="/topics">Topics</NavLink>
                </li>
                <li>
                    <NavLink className="nav-NavLink  bg-light text-dark  fw-normal fs-5 w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-blue" tabindex="-1"  to="/search">
                        Search
                    </NavLink>
                </li>
                
            </ul>


            <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <i class="far fa-user-circle"></i>
              </a>
              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                  
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <div>
                      <ul>
                       <li><a class="btn btn-primary" role="button" href="login.php">login/sign up</a></li>
                      
                        </ul>
                  </div>
                  
                </div>
              </div>
        </div>
    </div>
</nav>
    );
}

export default Navbar;