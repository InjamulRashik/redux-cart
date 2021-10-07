import React from "react";
import { addToCart } from "../redux/actions/cartAction";

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
