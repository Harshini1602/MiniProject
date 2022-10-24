import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateAudio from "../UpdateAudio";
import AudioLists from "../AudioLists";
// import "./styles.css"

export function DisplayAudio() {
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [infoAudio, setInfoAudio] = useState([]);
  const [modal, setModal] = useState(false);

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
    [update]
  );

  const editHandler = (e) => {
    setId(e.target.name);
    setModal(true);
  };

  const updateHandler = () => {
    setUpdate(!update);
  };

  const deleteHandler = (e) => {
    axios.delete(`http://localhost:4000/electronics/api/audioapp/${e.target.name}`);

    setInfoAudio((data) => {
      return data.filter((audio) => audio._id !== e.target.name);
    });
  };

  const closeHandler = () => {
    setId("");
    setModal(false);
  };
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.replace("/adminlogin");
	};

  return (
    <section>
    <nav className="logout" align= "right">
      <button className="logout-btn" onClick={handleLogout}>
        LOGOUT
      </button>
    </nav>
    <section className="cont">
      <Link to="/createaudio" className="button-new">
        <button className="todo-btn">➕ ADD NEW AUDIO PRODUCT</button>
      </Link>
      <section className="todo-data">
        <h1></h1>
        <ul className="todo-list-block">
          {infoAudio.map((audioInfo, index) => (
            <AudioLists
              key={index}
              audioInfos={audioInfo}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      </section>
      {modal ? (
        <section className="update-cont">
          <div className="update-todo-data">
            <p onClick={closeHandler} className="close">
              &times;
            </p>

            <UpdateAudio
              _id={id}
              closeHandler={closeHandler}
              updateHandler={updateHandler}
            />
          </div>
        </section>
      ) : (
        ""
      )}
    </section>
    </section>

  );
}

export default DisplayAudio;