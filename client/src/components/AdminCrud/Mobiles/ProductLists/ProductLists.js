import React from "react";

const ProductLists = ({ productInfos, editHandler, deleteHandler }) => {
  const { _id, name, description, price} = productInfos;

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
      <div className="todo-btn-cont">
        <button className="todo-btn" name={_id} onClick={editHandler}>
          🖊️
        </button>
        <button className="todo-btn" name={_id} onClick={deleteHandler}>
          🗑️
        </button>
      </div>
    </li>
  );
};

export default ProductLists;