import styles from "../../styles/Categories.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

export default function CategoriesHero() {
  const [activeSlide, setactiveSlide] = useState(0);

  const changeSlide = (newSlide) => {
    setactiveSlide(newSlide);
  };
  const slides = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  function goToPage(numberPage) {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideTo(numberPage, 1000, false);
  }
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={(swiper) => changeSlide(swiper.activeIndex)}
      onSwiper={(swiper) => console.log(swiper)}
      className="relative"
      id="categoriesSwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className={
              styles.home +
              " h-screen w-full py-24 pl-20 flex flex-col justify-center"
            }
          >
            <h1 className="font-black text-4xl">PRODUCT CATEGORIES</h1>
            <p className="breadboard text-white mt-4">
              <span>Home &gt; </span>
              <span>Categories &gt; </span>
              <span>Men &gt; </span>
              <span className={styles.spanActive}>Gadgets </span>
            </p>

            <div className="absolute right-0 flex flex-col gap-2">
              {slides.map((item, index) => {
                const activeClasses =
                  index === activeSlide ? "text-white bg-black" : "";
                return (
                  <button
                    className={
                      "outline-none text-black border-2 border-white cursor-pointer text-center rounded-full w-8 h-8 hover:bg-black hover:text-white " +
                      activeClasses
                    }
                    key={item.id}
                    onClick={() => {
                      goToPage(index);
                    }}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
