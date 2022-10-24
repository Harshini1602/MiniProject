import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Homepage = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };


  return (
    <>

      <div class="p-3 mb-2 bg-dark text-white">
      <ul className="navbar">

        <li>
          <img className="icon" src={Logo} alt="Logo" />
        </li>
        <ul className="nav justify-content-end">
          <a className="list" href="/">Home </a>
          <a className="list" href="/adminuser">Login/Signup </a>
          <a className="list" href="/Orders">Orders </a>
          <a className="list" href="/Cart">Cart </a>
        </ul>
      </ul>
      <hr></hr>

<br></br>
 <ul className="nav">
        <a class="btn1" href="/Mobiles" variant="success" role="button">Mobiles</a>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Grocery
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/Fruits">Fruits</Dropdown.Item>
            <Dropdown.Item href="/Vegetables">Vegetables</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Electronics 
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/Laptops">Laptops</Dropdown.Item>
            <Dropdown.Item href="/Audio">Audio</Dropdown.Item>
            <Dropdown.Item href="/Chargers">Chargers</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>

      <Carousel axis='horizontal'>
        <Carousel.Item>
          <img
            className="sliding"
            src="https://static.toiimg.com/photo/87486658.cms"
            alt="1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="sliding"
            src="https://st2.depositphotos.com/2539091/8088/i/600/depositphotos_80884318-stock-photo-pears-apples-orange-fruits-and.jpg"
            alt="2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="sliding"
            src="https://img.freepik.com/premium-photo/closeup-wireless-headphones-laptop-black-background-table-music-online_486502-6.jpg"
            alt="3"
          />
        </Carousel.Item>
      </Carousel>

</div>
<h6> <footer class="mt-6">
        <div className="socialMedia">
          <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
           </div>
           {/* <p>&copy; 2021 hmy.com</p> */}
      </footer>
      </h6>
    </>
    
  );
};




export default Homepage;


