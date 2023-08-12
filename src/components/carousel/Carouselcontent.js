import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title" style={{fontSize:"75px", color: slide.c1}}>{slide.title}</h2>
          <h3 className="slide-text" style={{color: slide.c2}}>{slide.description}</h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;