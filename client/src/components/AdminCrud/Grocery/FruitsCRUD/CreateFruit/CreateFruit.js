import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateFruit = () => {
  const [fruitInfo, setFruitInfo] = useState({ name: "", description: "", price: "" });

  function handleChange(e) {
    setFruitInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4000/grocery/api/fruitapp", fruitInfo)
      .then((res) => {
        setFruitInfo({ title: "", description: "", price: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create Fruit");
        console.log(err.message);
      })
  };

  return (
    <section className="cont">
      <Link to="/displayfruit">
        <button type="button" className="todo-btn todo-btn-back">
          🔙 BACK
        </button>
      </Link>

      <section className="todo-data">
        <form onSubmit={handleSubmit} className="form-cont" noValidate>
          <label className="label" htmlFor="name">
            FRUIT NAME
          </label>
          <input
            type="text"
            name="name"
            value={fruitInfo.name}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="description">
            FRUIT DESCRIPTION
          </label>
          <input
            type="textarea"
            name="description"
            value={fruitInfo.description}
            onChange={handleChange}
            className="input"
          />

          <label className="label" htmlFor="price">
            FRUIT PRICE
          </label>
          <input
            type="text"
            name="price"
            value={fruitInfo.price}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="todo-btn">
            ➕ CREATE FRUIT
          </button>
        </form>
      </section>
    </section>
  );
};

export default CreateFruit;