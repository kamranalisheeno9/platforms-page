import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import Logo from '../assets/img/logo.png'
import { BiSearch } from 'react-icons/bi';
function Header() {
  return (
    <>
    <div className="header-container">

   <Grid container spacing={2}>
  <Grid item xs={3} className="logo-container">
      <Link to="/">
      <img src={Logo} width="28px"  alt=" " />
      <span>
          Prada
      </span>
      </Link>
  </Grid>
  <Grid item xs={5}>
      <ul className="nav-links-list">
          <li>
              <Link to="/overview">
                  Overview
              </Link>
          </li>
          <li>
              <Link to="/company">
                Company
              </Link>
          </li>
          <li>
              <Link to="/contact">
                Contact
              </Link>
          </li>
      </ul>
  </Grid>
  
  <Grid  item xs={4}>
      <div className="login-en">
          <div>EN</div>
          <Link to="/login" >
          <div className="login-btn">
              Login
          </div>
          </Link>
      </div>
  </Grid>
 
</Grid>
   <Grid justifyContent="center" container spacing={2}>
   <Grid item xs={3}>
</Grid>
  <Grid item xs={5} className="btn-grid">
  <input type="text" placeholder="Research (Company / Research Name)" className="search-btn" />
          <div className="search-text"><span><BiSearch /></span> Search</div>
          
  </Grid>
  <Grid  item xs={4}>
      
  </Grid>
 
</Grid>
    </div>
 </>
  );
}

export default Header;
