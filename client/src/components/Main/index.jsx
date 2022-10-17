import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Logo from "./Logo.png"

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.replace("/");
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

		<h4 className="list" color="black">WELCOME!!</h4>
        <h4 className="list" color="black" ><Link to={"/Orders"}>ORDERS </Link></h4>
        <h4 className="list"><Link to={"/Cart"}>CART </Link></h4>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<button className={styles.white_btn} onClick={handleLogout}>
					LOGOUT
				</button>
			</nav>
		</div>
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

export default Main;