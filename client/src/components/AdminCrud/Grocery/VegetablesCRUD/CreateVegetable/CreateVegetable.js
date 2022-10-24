import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateVegetables = () => {
  const [VegetablesInfo, setVegetablesInfo] = useState({ name: "", description: "", price: "" });

  function handleChange(e) {
    setVegetablesInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4000/grocery/api/vegetableapp", VegetablesInfo)
      .then((res) => {
        setVegetablesInfo({ title: "", description: "", price: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create Vegetables");
        console.log(err.message);
      })
  };

  return (
    <section className="cont">
      <Link to="/displayvegetables">
        <button type="button" className="todo-btn todo-btn-back">
          🔙 BACK
        </button>
      </Link>

      <section className="todo-data">
        <form onSubmit={handleSubmit} className="form-cont" noValidate>
          <label className="label" htmlFor="name">
            VEGETABLE NAME
          </label>
          <input
            type="text"
            name="name"
            value={VegetablesInfo.name}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="description">
            VEGETABLE DESCRIPTION
          </label>
          <input
            type="textarea"
            name="description"
            value={VegetablesInfo.description}
            onChange={handleChange}
            className="input"
          />

          <label className="label" htmlFor="price">
            VEGETABLE PRICE
          </label>
          <input
            type="text"
            name="price"
            value={VegetablesInfo.price}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="todo-btn">
            ➕ CREATE VEGETABLES
          </button>
        </form>
      </section>
    </section>
  );
};

export default CreateVegetables;