import React, { useState } from "react";
// import { SliderData } from "./SliderData";

const SliderData = [
  {
    image: "http://www.videodrive.fr/pub/w2k23.jpg",
  },
  {
    image: "http://www.videodrive.fr/pub/krdld.jpg",
  },
  {
    image: "http://www.videodrive.fr/pub/gowr1.jpg",
  },
  {
    image: "http://www.videodrive.fr/pub/bcld.jpg",
  },
  {
    image: "http://www.videodrive.fr/pub/opo.jpg",
  },
];
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div className="left-arrow" onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </div>
      <div className="right-arrow" onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;

// source : https://reactjsguru.com/how-to-make-image-slider-in-react/
