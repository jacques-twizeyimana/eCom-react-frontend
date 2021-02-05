import { average } from "color.js";
import { useEffect, useState } from "react";

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
    <div className="product w-full md:w-1/2 lg:w-1/4 mt-2">
      <div className="product__content w-full h-80">
        <img src={displayProduct.image} className="h-full w-full"></img>
      </div>
      <div
        className="product__info text-white p-6 text-center cursor-pointer"
        style={{ backgroundColor: displayProduct.color }}
      >
        <h2 className="font-bold">{displayProduct.name}</h2>
        <p>Preview</p>
      </div>
    </div>
  );
}
