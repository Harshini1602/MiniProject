import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Logo from "./Logo.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import "./main.css"
import Footer from "../Footer/Footer";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };

  return (
    <>
      <div class="p-3 mb-2 bg-dark text-white">
        <ul className="navbar">

          <li>
            <img className="icon" src={Logo} alt="Logo" />
          </li>

          <ul className="nav justify-content-end">
            <a className="welcome">Welcome!</a>
            <a className="welcome" href="/Orders">Orders </a>
            <a className="welcome" href="/Cart">Cart </a>
            <nav className="logoutt">
              <a><button className="logoutbutton" onClick={handleLogout}>
                Logout
              </button></a>
            </nav>
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

<br></br>
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjM0yYjumko8o8Fd09TiBcL_2Pv9Q9RBKJQ&usqp=CAU" />
                <br></br> <br></br> <br></br> 
                <h5 class="card-title">Mobiles</h5>
                <p class="card-text">Mobiles discount upto 70% off..</p>
                <a href="/Mobiles" class="btn btn-dark">Shop Now</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOPrrQ5RFVW-1G0qOgr8tKQR0A_rzx1eJqw&usqp=CAU" />
                <br></br> <br></br> <br></br>
                <h5 class="card-title">Grocery</h5>
                <p class="card-text">Fresh fruits and vegetables discount upto 70% off..</p>
                <a href="/Fruits" class="btn btn-dark">Shop now </a>
                <a href="/Vegetables" class="btn btn-dark">Shop now </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <img src="data:image/jpeg;base64,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" />
                <br></br> <br></br>
                <h5 class="card-title">Electronics</h5>
                <p class="card-text">Audio, laptops and chargers discount upto 70% off..</p>
                <a href="/Audio" class="btn btn-dark">Shop now</a>
                <a href="/Chargers" class="btn btn-dark">Shop now</a>
                <a href="/Laptops" class="btn btn-dark">Shop now</a>
              </div>
            </div>
          </div>
        </div>


      </div>
      {/* <br></br> */}
     <h6> <footer class="mt-10">
        <div className="socialMedia">
          <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
           </div>
           {/* <p>&copy; 2021 hmy.com</p> */}
      </footer>
      </h6>
    </>

  );
};

export default Main;

