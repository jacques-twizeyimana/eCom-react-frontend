import Title from "./Title";
import { average } from "color.js";
import { useEffect, useState } from "react";

export default function Promotions() {
  const [color, setcolor] = useState("");
  const image = "./img/e4.jpg";

  useEffect(() => {
    async function getColorFromPhoto() {
      setcolor(await average(image, { format: "hex" }));
    }
    getColorFromPhoto();
  }, [image]);

  const date = [
    { key: "days", value: "04" },
    { key: "hours", value: "12" },
    { key: "minutes", value: "34" },
    { key: "seconds", value: "09" },
  ];

  return (
    <div className="mx-16">
      <Title title="Promotions"></Title>
      <div className="flex relative">
        <img src={image} className="w-1/2"></img>
        <button
          style={{ backgroundColor: color }}
          className="text-black font-bold rounded h-10 w-28 absolute bottom-0 right-1/2 mr-28"
        >
          Shop now
        </button>
        <div
          className="w-1/2 text-center p-10"
          style={{ backgroundColor: color }}
        >
          <div
            className="discount bg-white flex flex-col w-36 h-36 py-6 mx-auto justify-center"
            style={{ borderRadius: "50%", whiteSpace: "nowrap" }}
          >
            <h5>DISCOUNT</h5>
            <h1 className="font-bold text-2xl">Summer Dior</h1>
            <p>25% off</p>
          </div>

          <div className="timer flex justify-center mt-20">
            {date.map((row) => (
              <div key={row.key} className="flex flex-wrap m-auto">
                <p className="font-black text-xl ml-2">{row.value}</p>
                <p className="mt-6">{row.key}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
