import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styles from "./styles.module.css";
import Logo from "./Logo.png"
import HomePage from "./HomePage.css"


const Homepage = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

  return (
    <>
    <ul className="nav">
        <li>
          <img className="icon" src={Logo} alt="Logo" />
        </li>
        <nav className="input">
          <div className="container-fluid">
            <form className="d-flex">
              <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btnn" type="submit">Search</button></form></div></nav>

        <h4 className="list"><Link to={"/"}>Home </Link></h4>
        <h4 className="list"><Link to={"/adminuser"}>Login/Signup </Link></h4>
        <h4 className="list"><Link to={"/Orders"}>Orders </Link></h4>
        <h4 className="list"><Link to={"/Cart"}>Cart </Link></h4>
      </ul>
      <hr></hr>
      <ul className="list1">
        <li className="list2"><Link to={"/Mobiles"} className="list2" style={{ textDecoration: "none" , textalign:"center", }} >Mobiles</Link></li>

        <div class="list2">
          <button class="list2btn">Grocery <i class="fa fa-caret-down"></i></button>
          <div class="list2-content">
            <a href="/Fruits">Fruits</a><br></br>
            <a href="/Vegetables">Vegetables</a>
          </div>
        </div>


        <div class="list2">
          <button class="list2btn">Electronics <i class="fa fa-caret-down"></i></button>
          <div class="list2-content">
            <a href="/Laptops">Laptops</a><br></br>
            <a href="/Chargers">Chargers</a> <br></br>
            <a href="/Audio">Audio</a>
          </div>
        </div>

      </ul>
    </>
  );
};


export default Homepage;