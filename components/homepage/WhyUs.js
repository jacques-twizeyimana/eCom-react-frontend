import { useState } from "react";
import Title from "./Title";
import styles from "../../styles/Why.module.css";

export default function WhyUs() {
  const [shopWithUsData, setShopWithUsData] = useState([
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, ut consectetur adipiscing elit, sed ",
      image: "./svgs/shoe.svg",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, ut consectetur adipiscing elit, sed ",
      image: "./svgs/shoe.svg",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, ut consectetur adipiscing elit, sed ",
      image: "./svgs/shoe.svg",
    },
  ]);
  return (
    <>
      <Title title="Why Shop With Us" centered></Title>
      <div
        className={
          "p-16 flex justify-between flex-wrap mt-8 mb-16 " +
          styles.WhyUs__content
        }
      >
        {shopWithUsData.map((record) => (
          <div
            className={styles.WhyUs__item + " text-center items-center"}
            key={record.id}
          >
            <img src={record.image}></img>
            <p>{record.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
