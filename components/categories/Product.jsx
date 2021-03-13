import { average } from "color.js";
import { useEffect, useState } from "react";

export default function Product({ product = {} }) {
  const [displayProduct, setdisplayProduct] = useState(product);
  const [selected, setselected] = useState(false);

  const hoverImages = [
    { id: 1, image: "./svgs/eye.svg" },
    { id: 2, image: "./svgs/heart.svg" },
    { id: 3, image: "./svgs/cart.svg" },
  ];

  const changeSelected = (newState) => {
    setselected(newState);
  };
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
    <div
      className="product w-full md:w-1/2 lg:w-1/4 mt-2"
      onMouseEnter={() => changeSelected(true)}
      onMouseLeave={() => changeSelected(false)}
    >
      <div
        className="product__content flex justify-center items-center w-full h-80 relative"
      >
        <img src={displayProduct.image} className="h-full w-full"></img>
        {selected && (
          <div className="absolute flex flex-col items-center" style={{backgroundColor: "rgba(0, 0, 0, 0.8)", height:"100%", width:"100%"}}>
            <h1 className="font-bold text-white" style={{marginTop: "50%"}}>{displayProduct.name}</h1>
            <p className="text-white">${displayProduct.price}</p>
          </div>
        )}
      </div>
      <div
        className="product__info text-white p-6 text-center cursor-pointer"
        style={{ backgroundColor: displayProduct.color, minHeight: "6rem" }}
      >
        {!selected ? (
          <>
            <h2 className="font-bold">{displayProduct.name}</h2>
            <p>Preview</p>{" "}
          </>
        ) : (
          <div className="flex justify-center">
            {hoverImages.map((image) => (
              <img
                src={image.image}
                key={image.id}
                alt="Icon"
                className="mr-4"
              ></img>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
