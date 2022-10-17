import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AudioList from "./Audiolist"
import "./styles.css"

export function Audio() {
  const [id, setId] = useState("");
  const [infoAudio, setInfoAudio] = useState([]);
  

  useEffect(
    function () {
        axios
        .get("http://localhost:4000/electronics/api/audioapp")
        .then((res) => {
          setInfoAudio(res.data);
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
          {infoAudio.map((audioInfo, index) => (
            <AudioList
              key={index}
              audioInfos={audioInfo}
              
            />
          ))}
        </ul>
      </section>
      
    </section>
  );
}

export default Audio;