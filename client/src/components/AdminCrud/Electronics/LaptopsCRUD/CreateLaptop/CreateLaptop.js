import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateLaptop = () => {
  const [laptopInfo, setLaptopInfo] = useState({ name: "", description: "", price: "" });

  function handleChange(e) {
    setLaptopInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4000/electronics/api/laptopapp", laptopInfo)
      .then((res) => {
        setLaptopInfo({ title: "", description: "", price: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create laptop");
        console.log(err.message);
      })
  };

  return (
    <section className="cont">
      <Link to="/displaylaptop">
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
            value={laptopInfo.name}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="description">
            PRODUCT DESCRIPTION
          </label>
          <input
            type="textarea"
            name="description"
            value={laptopInfo.description}
            onChange={handleChange}
            className="input"
          />

          <label className="label" htmlFor="price">
           PRODUCT PRICE
          </label>
          <input
            type="text"
            name="price"
            value={laptopInfo.price}
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

export default CreateLaptop;