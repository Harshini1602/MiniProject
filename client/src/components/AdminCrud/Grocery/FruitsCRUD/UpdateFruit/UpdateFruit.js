import { useState } from "react";
import axios from "axios";
import "./styles.css"

function UpdateFruit({ _id, closeHandler, updateHandler }) {
  const [fruitInfo, setFruitInfo] = useState({ name: "", description: "", price: "" });

  const handleChange = (e) => {
    setFruitInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/grocery/api/fruitapp/${_id}`, fruitInfo)
      .then((res) => {
        setFruitInfo({ name: "", description: "", price: "" });
      })
      .catch((err) => {
        console.error(err);
      });

  };

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        submitHanlder(e);
        updateHandler();
        closeHandler();
      }}
    >
      <label htmlFor="name" className="label">
        FRUIT NAME
      </label>
      <input
        type="text"
        name="name"
        className="input"
        onChange={handleChange}
      />
      <label htmlFor="description" className="label">
        FRUIT DESCRIPTION
      </label>
      <input
        type="textarea"
        name="description"
        className="input"
        onChange={handleChange}
      />

      <label htmlFor="price" className="label">
        FRUIT PRICE
      </label>
      <input
        type="text"
        name="price"
        className="input"
        onChange={handleChange}
      />

      <button type="submit" className="todo-btn">
        ➕ UPDATE FRUIT
      </button>
    </form>
  );
}
export default UpdateFruit;