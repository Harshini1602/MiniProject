import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateLaptop from "../UpdateLaptop";
import LaptopLists from "../LaptopLists";
// import "./styles.css"

export function DisplayLaptop() {
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [infoLaptop, setInfoLaptop] = useState([]);
  const [modal, setModal] = useState(false);

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
    axios.delete(`http://localhost:4000/electronics/api/laptopapp/${e.target.name}`);

    setInfoLaptop((data) => {
      return data.filter((laptop) => laptop._id !== e.target.name);
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
      <Link to="/createlaptop" className="button-new">
        <button className="todo-btn">➕ ADD NEW LAPTOP PRODUCT</button>
      </Link>
      <section className="todo-data">
        <h1></h1>
        <ul className="todo-list-block">
          {infoLaptop.map((laptopInfo, index) => (
            <LaptopLists
              key={index}
              laptopInfos={laptopInfo}
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

            <UpdateLaptop
              _id={id}
              closeHandler={closeHandler}
              updateHandler={updateHandler}
            />
          </div>Laptop
        </section>
      ) : (
        ""
      )}
    </section>
    </section>

  );
}

export default DisplayLaptop;