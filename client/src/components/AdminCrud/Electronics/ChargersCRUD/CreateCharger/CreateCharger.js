import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateCharger = () => {
  const [chargerInfo, setChargerInfo] = useState({ name: "", description: "", price: "" });

  function handleChange(e) {
    setChargerInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4000/electronics/api/chargerapp", chargerInfo)
      .then((res) => {
        setChargerInfo({ title: "", description: "", price: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create charger");
        console.log(err.message);
      })
  };

  return (
    <section className="cont">
      <Link to="/displaycharger">
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
            value={chargerInfo.name}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="description">
            PRODUCT DESCRIPTION
          </label>
          <input
            type="textarea"
            name="description"
            value={chargerInfo.description}
            onChange={handleChange}
            className="input"
          />

          <label className="label" htmlFor="price">
           PRODUCT PRICE
          </label>
          <input
            type="text"
            name="price"
            value={chargerInfo.price}
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

export default CreateCharger;