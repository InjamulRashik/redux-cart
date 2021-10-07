import React from "react";

const Product = (props) => {
  const { addToCart } = props;
  const { name, id } = props.product;
  return (
    <div>
      <h5>{name}</h5>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
