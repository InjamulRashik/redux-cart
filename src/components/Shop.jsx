import React from "react";
import Product from "./Product";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Iphone",
    },
    {
      id: 2,
      name: "Samsung",
    },
    {
      id: 3,
      name: "OnePlus",
    },
    {
      id: 4,
      name: "Pixel",
    },
    {
      id: 5,
      name: "Xiaomi",
    },
  ];
  return (
    <div>
      <h4>Hello from Shop!</h4>
      {products.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
};

export default Shop;
