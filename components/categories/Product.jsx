import { average } from "color.js";
import React, { useEffect, useState } from "react";

export default function Product({ product = {} }) {
  const [displayProduct, setdisplayProduct] = useState(product);
  useEffect(() => {
    async function getDisplayProduct() {
      setdisplayProduct({
        ...product,
        color: await average(product.image, { format: "hex" }),
      });
    }
    if (product.image && !product.color) {
      getDisplayProduct();
    }
  }, [product]);
  return (
    <div className="product w-1/4">
      <div className="product__content w-full h-80">
        <img src={displayProduct.image} className="h-full"></img>
      </div>
      <div
        className="product__info text-white p-6 text-center"
        style={{ backgroundColor: displayProduct.color }}
      >
        <h2 className="font-bold">{displayProduct.name}</h2>
        <p>Preview</p>
      </div>
    </div>
  );
}
