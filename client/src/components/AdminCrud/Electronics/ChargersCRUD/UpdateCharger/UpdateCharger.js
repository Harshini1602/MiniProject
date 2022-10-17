import { useState } from "react";
import axios from "axios";
// import "./style1.css"

function UpdateCharger({ _id, closeHandler, updateHandler }) {
  const [chargerInfo, setChargerInfo] = useState({ name: "", description: "", price: "" });

  const handleChange = (e) => {
    setChargerInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/electronics/api/chargerapp/${_id}`, chargerInfo)
      .then((res) => {
        setChargerInfo({ name: "", description: "", price: "" });
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
        PRODUCT NAME
      </label>
      <input
        type="text"
        name="name"
        className="input"
        onChange={handleChange}
      />
      <label htmlFor="description" className="label">
        PRODUCT DESCRIPTION
      </label>
      <input
        type="textarea"
        name="description"
        className="input"
        onChange={handleChange}
      />

      <label htmlFor="price" className="label">
        PRODUCT PRICE
      </label>
      <input
        type="text"
        name="price"
        className="input"
        onChange={handleChange}
      />

      <button type="submit" className="todo-btn">
        ➕ UPDATE PRODUCT
      </button>
    </form>
  );
}
export default UpdateCharger;