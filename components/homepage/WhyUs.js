import { useState } from "react";
import Title from "./Title";
import styles from "../../styles/Why.module.css";

export default function WhyUs() {
  const [shopWithUsData, setShopWithUsData] = useState([
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, ut consectetur adipiscing elit, sed ",
      image: "./svgs/svg1.svg",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, ut consectetur adipiscing elit, sed ",
      image: "./svgs/svg2.svg",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, ut consectetur adipiscing elit, sed ",
      image: "./svgs/svg3.svg",
    },
    {
      id: 4,
      description:
        "Lorem ipsum dolor sit amet, ut consectetur adipiscing elit, sed ",
      image: "./svgs/svg4.svg",
    },
  ]);
  return (
    <>
      <Title title="Why Shop With Us" centered></Title>
      <div
        className={
          "py-16 flex justify-between flex-wrap mt-8 mb-16 text-white bg-black " +
          styles.WhyUs__content
        }
      >
        {shopWithUsData.map((record, index) => (
          <div
            className={
              index === 0
                ? "text-center items-center p-10 " + styles.WhyUs__item
                : "text-center items-center p-10 " +
                  styles.WhyUs__item +
                  " " +
                  styles.WhyUs__item__borderLeft
            }
            key={record.id}
          >
            <img src={record.image}></img>
            <p className="text-sm">{record.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
