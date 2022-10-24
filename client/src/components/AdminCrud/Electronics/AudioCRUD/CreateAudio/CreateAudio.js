import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateAudio = () => {
  const [audioInfo, setAudioInfo] = useState({ name: "", description: "", price: "" });

  function handleChange(e) {
    setAudioInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4000/electronics/api/audioapp", audioInfo)
      .then((res) => {
        setAudioInfo({ title: "", description: "", price: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create audio");
        console.log(err.message);
      })
  };

  return (
    <section className="cont">
      <Link to="/displayaudio">
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
            value={audioInfo.name}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="description">
            PRODUCT DESCRIPTION
          </label>
          <input
            type="textarea"
            name="description"
            value={audioInfo.description}
            onChange={handleChange}
            className="input"
          />

          <label className="label" htmlFor="price">
           PRODUCT PRICE
          </label>
          <input
            type="text"
            name="price"
            value={audioInfo.price}
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

export default CreateAudio;