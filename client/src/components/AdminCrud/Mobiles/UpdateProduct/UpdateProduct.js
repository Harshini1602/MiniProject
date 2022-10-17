import { useState } from "react";
import axios from "axios";
import "./style1.css"

function UpdateProduct({ _id, closeHandler, updateHandler }) {
  const [productInfo, setProductInfo] = useState({ name: "", description: "", price: "", image: "" });

  const handleChange = (e) => {
    setProductInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/mobiles/api/productapp/${_id}`, productInfo)
      .then((res) => {
        setProductInfo({ name: "", description: "", price: "", image: "" });
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

      <label htmlFor="image" className="label">
        PRODUCT IMAGE
      </label>
      <input
        type="file"
        name="image"
        accept=".png, .jpg, .jpeg"
        className="input"
        onChange={handleChange}
      />

      <button type="submit" className="todo-btn">
        ➕ UPDATE
      </button>
    </form>
  );
}
export default UpdateProduct;