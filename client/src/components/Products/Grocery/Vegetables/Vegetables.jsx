import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import VegetablesList from "./Vegetableslist" ;
//import "./styles.css"

export function Vegetables() {
  const [id, setId] = useState("");
  
  const [infoVegetable, setInfoVegetable] = useState([]);
  

  useEffect(
    function () {
      axios
        .get("http://localhost:4000/grocery/api/vegetableapp")
        .then((res) => {
          setInfoVegetable(res.data);
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
          {infoVegetable.map((VegetableInfo, index) => (
            <VegetablesList
              key={index}
              VegetableInfos={VegetableInfo}
              
            />
          ))}
        </ul>
      </section>
      
    </section>
  );
}

export default Vegetables;