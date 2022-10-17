import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import FruitsList from "./Fruitslist"
import "./styles.css"

export function Fruits() {
  const [id, setId] = useState("");
  const [infoFruit, setInfoFruit] = useState([]);
  

  useEffect(
    function () {
        axios
        .get("http://localhost:4000/grocery/api/fruitapp")
        .then((res) => {
          setInfoFruit(res.data);
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
          {infoFruit.map((fruitInfo, index) => (
            <FruitsList
              key={index}
              fruitInfos={fruitInfo}
              
            />
          ))}
        </ul>
      </section>
      
    </section>
  );
}

export default Fruits;