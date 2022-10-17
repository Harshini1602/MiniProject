import React from "react";

const AudioList = ({ audioInfos, buynow, addtocart }) => {
  const { _id, name, description, price } = audioInfos;

  return (
    <li key={_id}>
      <div className="title-description">
        <h2>{name}</h2>
        <h1></h1>
        <p>{description}</p>
        <h1></h1>
        <h2>{price}</h2>

      </div>
      <h1></h1>
      <div className="todo-btn-container">
        <button className="todo-btn" name={_id} onClick={buynow}>
        BUY NOW
        </button>
        <button className="todo-btn" name={_id} onClick={addtocart}>
          ADD TO CART
        </button>
      </div>
      
    </li>
  );
};

export default AudioList;