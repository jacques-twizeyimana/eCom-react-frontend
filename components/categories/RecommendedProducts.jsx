import Title from "../homepage/Title";
import Product from "./Product";

export default function RecommendedProducts() {
  const initialProducts = [
    {
      id: 1,
      image: "./img/categories/cle1.png",
      name: "Dyson 360 Heurist Cleaner",
      price: 79.99,
    },
    {
      id: 2,
      image: "./img/categories/huwa5.png",
      name: "Huawei P40 Pro 5G",
      price: 79.99,
      color: "#2582DE",
    },
    {
      id: 3,
      image: "./img/categories/hue2.png",
      name: "Huawei P40 Pro 5G",
      price: 79.99,
    },
    {
      id: 4,
      image: "./img/categories/micro2.png",
      name: "Huawei P40 Pro 5G",
      price: 79.99,
      color: "#650D03",
    },
  ];
  return (
    <div className="mx-4">
      <Title title="Recommended Products"></Title>
      <div className="products__list flex justify-between">
        {initialProducts.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
