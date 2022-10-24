import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateCharger from "../UpdateCharger";
import ChargerLists from "../ChargerLists";
// import "./styles.css"

export function DisplayCharger() {
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [infoCharger, setInfoCharger] = useState([]);
  const [modal, setModal] = useState(false);

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
    axios.delete(`http://localhost:4000/electronics/api/chargerapp/${e.target.name}`);

    setInfoCharger((data) => {
      return data.filter((charger) => charger._id !== e.target.name);
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
      <Link to="/createcharger" className="button-new">
        <button className="todo-btn">➕ ADD NEW CHARGER PRODUCT</button>
      </Link>
      <section className="todo-data">
        <h1></h1>
        <ul className="todo-list-block">
          {infoCharger.map((chargerInfo, index) => (
            <ChargerLists
              key={index}
              chargerInfos={chargerInfo}
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

            <UpdateCharger
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

export default DisplayCharger;