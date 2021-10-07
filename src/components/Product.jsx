import React from "react";

const Product = (props) => {
  const { name } = props.product;
  return (
    <div>
      <h5>{name}</h5>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
