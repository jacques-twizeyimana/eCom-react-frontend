import Title from "./Title";
import { average } from "color.js";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);
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

  const slides = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];

  return (
    <div className="lg:mx-16" id={"shop"}>
      <Title title="Promotions"></Title>
      <div className="lg:flex">
        <div className="w-full lg:w-1/2 relative">
          <img src={image} className="w-full h-full"></img>
          <button
            style={{ backgroundColor: color }}
            className="text-black font-bold rounded h-10 w-32 absolute bottom-0 right-0 lg:right-20"
          >
            Shop now
          </button>
        </div>
        <div
          className="w-full lg:w-1/2 text-center p-10"
          style={{ backgroundColor: color }}
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="h-80 lg:h-full lg:min-h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="discount bg-white flex flex-col w-36 h-36 py-6 mx-auto justify-center"
                  style={{ borderRadius: "50%", whiteSpace: "nowrap" }}
                >
                  <h5 className="my-2">DISCOUNT</h5>
                  <h1 className="font-extrabold text-2xl">Summer Dior</h1>
                  <p className="text-gray-400 mt-2">25% off</p>
                </div>

                <div className="timer flex justify-center mt-10">
                  {date.map((row) => (
                    <div key={row.key} className="flex m-auto">
                      <p className="font-black text-xl ml-2">{row.value}</p>
                      <p className="mt-6 text-xs">{row.key}</p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
