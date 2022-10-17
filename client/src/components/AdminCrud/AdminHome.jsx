import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {

    return (
    <>
        <ul className="list1">
        <li className="list2"><Link to={"/add-list"} onClick = "/mobiles/api/productapp" className="list2" style={{ textDecoration: "none" , textalign:"center", }} >MOBILES</Link></li>
        
        <div class="list2">
          <button class="list2btn">GROCERY <i class="fa fa-caret-down"></i></button>
          <div class="list2-content">
            <a onClick = "/fruits/api/fruitapp" href="/createfruit">FRUITS</a><br></br>
            <a onClick = "/grocery/api/vegetableapp" href="/createvegetable"> VEGETABLES</a>
          </div>
        </div>
        
        <div class="list2">
          <button class="list2btn">ELECTRONICS <i class="fa fa-caret-down"></i></button>
          <div class="list2-content">
            <a onClick = "/electronics/api/laptopapp" href="/createlaptop">LAPTOPS</a><br></br>
            <a onClick = "/electronics/api/chargerapp" href="/createcharger">CHARGERS</a> <br></br>
            <a onClick = "/electronics/api/audioapp" href="/createaudio">AUDIO</a>
          </div>
        </div>
      </ul>
      </>
     
    );
}

export default AdminHome;