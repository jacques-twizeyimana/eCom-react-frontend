import Title from "../../components/homepage/Title";
import ReactStars from "react-rating-stars-component";
import styles from "../../styles/BestSeller.module.css";
import { useState } from "react";
export default function NewProducts() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const [inHover, setHover] = useState(null);
  const [byCategoryProducts, setbyCategoryProducts] = useState([
    {
      id: 1,
      image: "/img/shopByCategory/category1.png",
      name: "Gucci ACE SNEAKERS ",
      price: "150.00",
    },
    {
      id: 2,
      image: "/img/shopByCategory/category2.png",
      name: "Gucci ACE SNEAKERS ",
      price: "150.00",
    },
    {
      id: 3,
      image: "/img/shopByCategory/category3.png",
      name: "Gucci ACE SNEAKERS ",
      price: "150.00",
    },
    {
      id: 4,
      image: "/img/shopByCategory/category4.png",
      name: "Gucci ACE SNEAKERS ",
      price: "150.00",
    },
  ]);

  return (
    <div>
      <div className="lg:flex lg:justify-center lg:items-center lg:mr-14">
        <Title title="Shop By Category"></Title>
        <div
          className={"flex  h-12  rounded border border-black " + styles.filter}
        >
          <span className="mt-1 ">Filter : </span>
          <select className="font-black pl-6">
            <option>Food</option>
            <option>Food</option>
            <option>Food</option>
            <option>Food</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 auto-rows-auto gap-12 w-11/12 ml-6  ">
        {byCategoryProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-white shadow-2xl relative "
              onMouseOver={() => setHover(product.id)}
              onMouseLeave={() => setHover(null)}
            >
              <button
                className="float-left w-14 h-8 bg-red-500 mt-4 ml-4 text-white rounded-tr-lg
           rounded-br-md rounded-bl-lg"
              >
                New
              </button>
              <div
                className="ml-52"
                onMouseOver={() => setHover(product.id)}
                onMouseLeave={() => setHover(null)}
              >
                {inHover === product.id && (
                  <div className="absolute">
                    <div className="bg-img h-8 w-9 my-4 bg-gray-100">
                      <img
                        src="/img/newProducts/icons8_heart_26px 3.png"
                        alt=""
                        className="ml-1.5"
                      />
                    </div>
                  </div>
                )}
              </div>
              <img src={product.image} className="h-72" />

              {(inHover === product.id && (
                <div className="  flex h-28 items-end  ">
                  <div className="py-4  text-white bg-black h-16 w-3/4 text-center  ">
                    <p>Add to Cart</p>
                  </div>
                  <div className="text-white  w-1/4 bg-white pl-4 h-16 cursor-pointer border-2 border-black py-4">
                    <img src="/img/newProducts/icons8_shopping_cart_24px_4 2.png" />
                  </div>
                </div>
              )) || (
                <div className="text-center h-28">
                  <h1 className="font-black">{product.name}</h1>
                  <div className="ml-20">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <h2>{product.price}</h2>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
