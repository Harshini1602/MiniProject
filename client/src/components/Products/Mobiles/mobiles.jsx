import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import MobilesList from "../Mobiles/Mobileslist";
import "./styles.css"

export function Mobiles() {
  const [id, setId] = useState("");
  
  const [infoProduct, setInfoProduct] = useState([]);
  

  useEffect(
    function () {
      axios
        .get("http://localhost:4000/mobiles/api/productapp")
        .then((res) => {
          setInfoProduct(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    
  );
  
  return (
    <section className="cont">
      
      <section className="todo-data">
        <h1></h1>
        <ul className="todo-list-block">
          {infoProduct.map((productInfo, index) => (
            <MobilesList
              key={index}
              productInfos={productInfo}
              
            />
          ))}
        </ul>
      </section>
      
    </section>
  );
}

export default Mobiles;