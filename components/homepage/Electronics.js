import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { useEffect, useState } from "react";
import { average } from "color.js";

SwiperCore.use([Pagination]);
export default function Electronics() {
  const [color, setcolor] = useState("");
  const image = "./img/mug5.jpg";

  useEffect(() => {
    async function getColorFromPhoto() {
      setcolor(await average(image, { format: "hex" }));
    }
    getColorFromPhoto();
  }, [image]);

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
    <div className="lg:mx-16">
      <Title title="Electronics"></Title>
      <div className="lg:m-10 flex flex-wrap items-center lg:h-96 bg-black">
        <div className="flex-1 h-full w-full lg:w-1/2">
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="w-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img src={image} className="h-96"></img>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:my-10 px-20 text-white p-5 w-full lg:w-1/2 h-full flex flex-col bg-black justify-center">
          <h1 className="font-weight-bold mb-10 text-2xl font-bold">
            Technology Related
          </h1>
          <p>
            Lorem ipsum dolor sit amet, ut consectetur adipiscing elit, sed do
            eiusmod tempor incididunt labore et dolore magna aliqua.{" "}
          </p>
          <button className="mt-10 bg-white text-black w-1/2 mx-auto rounded h-10 font-bold">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}
