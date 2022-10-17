import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateProduct from "../UpdateProduct";
import ProductLists from "../ProductLists";
import "./styles.css"

export function DisplayProduct() {
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [infoProduct, setInfoProduct] = useState([]);
  const [modal, setModal] = useState(false);

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
    axios.delete(`http://localhost:4000/mobiles/api/productapp/${e.target.name}`);

    setInfoProduct((data) => {
      return data.filter((product) => product._id !== e.target.name);
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
      <Link to="/add-list" className="button-new">
        <button className="todo-btn">➕ ADD NEW PRODUCT</button>
      </Link>
      <section className="todo-data">
        <h1></h1>
        <ul className="todo-list-block">
          {infoProduct.map((productInfo, index) => (
            <ProductLists
              key={index}
              productInfos={productInfo}
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

            <UpdateProduct
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

export default DisplayProduct;