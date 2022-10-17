import React from "react";

const MobileList = ({ productInfos, buynow, addtocart }) => {
  const { _id, name, description, price } = productInfos;

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
        buynow
        </button>
        <button className="todo-btn" name={_id} onClick={addtocart}>
          addtocart
        </button>
      </div>
      
    </li>
  );
};

export default MobileList;