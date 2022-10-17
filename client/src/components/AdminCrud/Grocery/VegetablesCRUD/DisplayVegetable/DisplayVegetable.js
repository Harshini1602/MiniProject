import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateVegetable from "../UpdateVegetable";
import VegetableLists from "../VegetableLists";

export function DisplayVegetable() {
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [infoVegetable, setInfoVegetable] = useState([]);
  const [modal, setModal] = useState(false);

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
    axios.delete(`http://localhost:4000/grocery/api/vegetableapp/${e.target.name}`);

    setInfoVegetable((data) => {
      return data.filter((Vegetable) => Vegetable._id !== e.target.name);
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
      <Link to="/createvegetable" className="button-new">
        <button className="todo-btn">➕ ADD NEW VEGETABLE</button>
      </Link>
      <section className="todo-data">
        <h1></h1>
        <ul className="todo-list-block">
          {infoVegetable.map((VegetableInfo, index) => (
            <VegetableLists
              key={index}
              VegetableInfos={VegetableInfo}
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

            <UpdateVegetable
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

export default DisplayVegetable;