import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css"
import AdminHome from "../../AdminHome";

const CreateProduct = () => {
  const [productInfo, setProductInfo] = useState({ name: "", description: "", price: "", image: "" });

  function handleChange(e) {
    setProductInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/mobiles/api/productapp", productInfo)
      .then((res) => {
        setProductInfo({ title: "", description: "", price: "", image: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create Product");
        console.log(err.message);
      });
  };

  return (
    <section className="container">
      <Link to="/displayproduct">
        <button type="button" className="todo-btn todo-btn-back">
          🔙 BACK
        </button>
      </Link>

      <section className="todo-data">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <label className="label" htmlFor="name">
            PRODUCT NAME
          </label>
          <input
            type="text"
            name="name"
            value={productInfo.name}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="description">
            PRODUCT DESCRIPTION
          </label>
          <input
            type="textarea"
            name="description"
            value={productInfo.description}
            onChange={handleChange}
            className="input"
          />

          <label className="label" htmlFor="price">
            PRODUCT PRICE
          </label>
          <input
            type="text"
            name="price"
            value={productInfo.price}
            onChange={handleChange}
            className="input"
          />

          <label className="label" htmlFor="image">
            PRODUCT IMAGE
          </label>
          <input
            type="file"
            name="image"
            accept=".png, .jpg, .jpeg"
            value={productInfo.image}
            onChange={handleChange}
            className="input"
          />


          <button type="submit" className="todo-btn">
            ➕ CREATE PRODUCT
          </button>
        </form>
      </section>
    </section>
  );
};

export default CreateProduct;