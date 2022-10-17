import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateFruit from "../UpdateFruit";
import FruitLists from "../FruitLists";

export function DisplayFruit() {
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [infoFruit, setInfoFruit] = useState([]);
  const [modal, setModal] = useState(false);

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
    axios.delete(`http://localhost:4000/grocery/api/fruitapp/${e.target.name}`);

    setInfoFruit((data) => {
      return data.filter((fruit) => fruit._id !== e.target.name);
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
    <section className="container">
      <Link to="/createfruit" className="button-new">
        <button className="todo-btn">➕ ADD NEW FRUIT</button>
      </Link>
      <section className="todo-data">
        <h1></h1>
        <ul className="todo-list-block">
          {infoFruit.map((fruitInfo, index) => (
            <FruitLists
              key={index}
              fruitInfos={fruitInfo}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      </section>
      {modal ? (
        <section className="update-container">
          <div className="update-todo-data">
            <p onClick={closeHandler} className="close">
              &times;
            </p>

            <UpdateFruit
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

export default DisplayFruit;