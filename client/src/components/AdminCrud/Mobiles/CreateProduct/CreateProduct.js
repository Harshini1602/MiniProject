import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminHome from "../../AdminHome";

const CreateProduct = () => {
  const [productInfo, setProductInfo] = useState({ name: "", description: "", price: "" });

  function handleChange(e) {
    setProductInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/mobiles/api/productapp", productInfo)
      .then((res) => {
        setProductInfo({ title: "", description: "", price: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create Product");
        console.log(err.message);
      });
  };

  return (
    <section className="cont">
      <Link to="/displayproduct">
        <button type="button" className="todo-btn todo-btn-back">
          🔙 BACK
        </button>
      </Link>

      <section className="todo-data">
        <form onSubmit={handleSubmit} className="form-cont" noValidate>
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


          <button type="submit" className="todo-btn">
            ➕ CREATE PRODUCT
          </button>
        </form>
      </section>
    </section>
  );
};

export default CreateProduct;