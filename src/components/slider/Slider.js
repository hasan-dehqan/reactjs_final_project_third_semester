import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSliderValue } from "../../features/slider/sliderSlice";
import "./slider.css";

const Slider = () => {
  const { sliderValue, imageNames } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = (sliderValue + 1) % imageNames.length;
      dispatch(setSliderValue(newValue));
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderValue, dispatch, imageNames.length]);

  return (
    <div className="slider-container">
      <img
        className="slider-image"
        src={imageNames[sliderValue]}
        alt="slider"
      />
    </div>
  );
};

export default Slider;
