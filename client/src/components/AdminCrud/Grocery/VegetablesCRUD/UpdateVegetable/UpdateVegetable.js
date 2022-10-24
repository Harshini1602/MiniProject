import { useState } from "react";
import axios from "axios";
import "./styles.css"

function UpdateVegetable({ _id, closeHandler, updateHandler }) {
  const [VegetableInfo, setVegetableInfo] = useState({ name: "", description: "", price: "" });

  const handleChange = (e) => {
    setVegetableInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/grocery/api/vegetableapp/${_id}`, VegetableInfo)
      .then((res) => {
        setVegetableInfo({ name: "", description: "", price: "" });
      })
      .catch((err) => {
        console.error(err);
      });

  };

  return (
    <form
      className="form-cont"
      onSubmit={(e) => {
        submitHanlder(e);
        updateHandler();
        closeHandler();
      }}
    >
      <label htmlFor="name" className="label">
        VEGETABLE NAME
      </label>
      <input
        type="text"
        name="name"
        className="input"
        onChange={handleChange}
      />
      <label htmlFor="description" className="label">
        VEGETABLE DESCRIPTION
      </label>
      <input
        type="textarea"
        name="description"
        className="input"
        onChange={handleChange}
      />

      <label htmlFor="price" className="label">
        VEGETABLE PRICE
      </label>
      <input
        type="text"
        name="price"
        className="input"
        onChange={handleChange}
      />

      <button type="submit" className="todo-btn">
        ➕ UPDATE VEGETABLE
      </button>
    </form>
  );
}
export default UpdateVegetable;