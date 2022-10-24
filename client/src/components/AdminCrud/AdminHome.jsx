import React from "react";
import { Link } from "react-router-dom";
import "./AdminHome.css"
import Dropdown from 'react-bootstrap/Dropdown';

const AdminHome = () => {

  return (
    <>
    <div className="home">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <ul className="ahome">
        <a class="btn2" onClick="/mobiles/api/productapp" href="/add-list" variant="success" role="button">Mobiles</a>
        <br></br><br></br><br></br>
        <br></br><br></br>

        <Dropdown>
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            Grocery
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick="/grocery/api/fruitapp" href="/createfruit">Fruits</Dropdown.Item>
            <Dropdown.Item onClick="/grocery/api/vegetableapp" href="/createvegetable">Vegetables</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


        <br></br><br></br><br></br><br></br>
        <Dropdown>
          <Dropdown.Toggle variant="warning" id="dropdown-basic" class="btn btn-secondary dropdown-toggle">
            Electronics
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick="/electronics/api/laptopapp" href="/createlaptop">Laptops</Dropdown.Item>
            <Dropdown.Item onClick="/electronics/api/audioapp" href="/createaudio">Audio</Dropdown.Item>
            <Dropdown.Item onClick="/electronics/api/chargerapp" href="/createcharger">Chargers</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br></br>
      </ul>
      </div>
    </>
  );
}

export default AdminHome;