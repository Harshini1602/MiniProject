import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import LaptopList from "./Laptoplist"

export function Laptop() {
  const [id, setId] = useState("");
  const [infoLaptop, setInfoLaptop] = useState([]);
  

  useEffect(
    function () {
        axios
        .get("http://localhost:4000/electronics/api/laptopapp")
        .then((res) => {
          setInfoLaptop(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    
  );
  
  return (
    <section className="container">
      
      <section className="todo-data">
        <h1></h1>
        <ul className="todo-list-block">
          {infoLaptop.map((laptopInfo, index) => (
            <LaptopList
              key={index}
              lapopInfos={laptopInfo}
              
            />
          ))}
        </ul>
      </section>
      
    </section>
  );
}

export default Laptop;