import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cartAction";
import Product from "./Product";

const Shop = (props) => {
  console.log(props);
  const { products, addToCart } = props;

  return (
    <div>
      <h4>Hello from Shop!</h4>
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          addToCart={addToCart}
        ></Product>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};
const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
