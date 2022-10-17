import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ChargerList from "./Chargerlist"
import "./styles.css"

export function Charger() {
  const [id, setId] = useState("");
  const [infoCharger, setInfoCharger] = useState([]);
  

  useEffect(
    function () {
        axios
        .get("http://localhost:4000/electronics/api/chargerapp")
        .then((res) => {
          setInfoCharger(res.data);
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
          {infoCharger.map((chargerInfo, index) => (
            <ChargerList
              key={index}
              chargerInfos={chargerInfo}
              
            />
          ))}
        </ul>
      </section>
      
    </section>
  );
}

export default Charger;