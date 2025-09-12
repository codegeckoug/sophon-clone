import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import sync1 from "../../assets/syncswap1.webp";
import sync2 from "../../assets/syncswap2.webp";

const logo = [sync1, sync2];
export default function PetopiaImage() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const slide = scrollRef.current.querySelector(".swiper-slide");
      if (slide) {
        scrollRef.current.scrollBy({
          left: -slide.offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const slide = scrollRef.current.querySelector(".swiper-slide");
      if (slide) {
        scrollRef.current.scrollBy({
          left: slide.offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/syncimage"); // change this path to your PetopiaImage route
  };

  return (
    <div className="picture-container">
      <div className="close-button">
        <button className="cursor-pointer" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="cursor-pointer"
          >
            <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
          </svg>
        </button>
      </div>
      <div className="picture-arrow">
        <button className="custom-button" onClick={scrollLeft}>
          <div data-testid="button-inner" className="button-inner">
            {/* Content */}
            <div className="button-content">
              <span
                data-testid="button-icon-wrapper"
                className="button-icon-wrapper"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="button-icon"
                  viewBox="0 0 256 256"
                >
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
              </span>
            </div>

            {/* Loader wrapper */}
            <div className="loader-wrapper">
              {/* Spinner */}
              <svg className="loader-spinner">
                {/* You can embed the gradient div here if needed */}
              </svg>

              {/* Ring */}
              <svg className="loader-ring"></svg>

              {/* Checkmark */}
              <svg
                className="loader-check"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1036 2.89645C11.2988 3.09171 11.2988 3.40829 11.1036 3.60355L4.85355 9.85355C4.65829 10.0488 4.34171 10.0488 4.14645 9.85355L1.39645 7.10355C1.20118 6.90829 1.20118 6.59171 1.39645 6.39645C1.59171 6.20118 1.90829 6.20118 2.10355 6.39645L4.5 8.79289L10.3964 2.89645C10.5917 2.70118 10.9083 2.70118 11.1036 2.89645Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className="picture-arrow-right">
        <button className="custom-button" onClick={scrollRight}>
          <div data-testid="button-inner" className="button-inner">
            {/* Content */}
            <div className="button-content">
              <span
                data-testid="button-icon-wrapper"
                className="button-icon-wrapper"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="button-icon"
                  viewBox="0 0 256 256"
                >
                  {/* Chevron Right */}
                  <path d="M90.34,202.34a8,8,0,0,1,0-11.32L154.69,128,90.34,64.97a8,8,0,0,1,11.32-11.32l80,80a8,8,0,0,1,0,11.32l-80,80A8,8,0,0,1,90.34,202.34Z"></path>
                </svg>
              </span>
            </div>

            {/* Loader wrapper */}
            <div className="loader-wrapper">
              {/* Spinner */}
              <svg className="loader-spinner">
                {/* You can embed the gradient div here if needed */}
              </svg>

              {/* Ring */}
              <svg className="loader-ring"></svg>

              {/* Checkmark */}
              <svg
                className="loader-check"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1036 2.89645C11.2988 3.09171 11.2988 3.40829 11.1036 3.60355L4.85355 9.85355C4.65829 10.0488 4.34171 10.0488 4.14645 9.85355L1.39645 7.10355C1.20118 6.90829 1.20118 6.59171 1.39645 6.39645C1.59171 6.20118 1.90829 6.20118 2.10355 6.39645L4.5 8.79289L10.3964 2.89645C10.5917 2.70118 10.9083 2.70118 11.1036 2.89645Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className="swipe-buttons">
        <button className="custom-button" onClick={scrollLeft}>
          <div data-testid="button-inner" className="button-inner">
            {/* Content */}
            <div className="button-content">
              <span
                data-testid="button-icon-wrapper"
                className="button-icon-wrapper"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="button-icon"
                  viewBox="0 0 256 256"
                >
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
              </span>
            </div>

            {/* Loader wrapper */}
            <div className="loader-wrapper">
              {/* Spinner */}
              <svg className="loader-spinner">
                {/* You can embed the gradient div here if needed */}
              </svg>

              {/* Ring */}
              <svg className="loader-ring"></svg>

              {/* Checkmark */}
              <svg
                className="loader-check"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1036 2.89645C11.2988 3.09171 11.2988 3.40829 11.1036 3.60355L4.85355 9.85355C4.65829 10.0488 4.34171 10.0488 4.14645 9.85355L1.39645 7.10355C1.20118 6.90829 1.20118 6.59171 1.39645 6.39645C1.59171 6.20118 1.90829 6.20118 2.10355 6.39645L4.5 8.79289L10.3964 2.89645C10.5917 2.70118 10.9083 2.70118 11.1036 2.89645Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </button>

        <button className="custom-button" onClick={scrollRight}>
          <div data-testid="button-inner" className="button-inner">
            {/* Content */}
            <div className="button-content">
              <span
                data-testid="button-icon-wrapper"
                className="button-icon-wrapper"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="button-icon"
                  viewBox="0 0 256 256"
                >
                  {/* Chevron Right */}
                  <path d="M90.34,202.34a8,8,0,0,1,0-11.32L154.69,128,90.34,64.97a8,8,0,0,1,11.32-11.32l80,80a8,8,0,0,1,0,11.32l-80,80A8,8,0,0,1,90.34,202.34Z"></path>
                </svg>
              </span>
            </div>

            {/* Loader wrapper */}
            <div className="loader-wrapper">
              {/* Spinner */}
              <svg className="loader-spinner">
                {/* You can embed the gradient div here if needed */}
              </svg>

              {/* Ring */}
              <svg className="loader-ring"></svg>

              {/* Checkmark */}
              <svg
                className="loader-check"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1036 2.89645C11.2988 3.09171 11.2988 3.40829 11.1036 3.60355L4.85355 9.85355C4.65829 10.0488 4.34171 10.0488 4.14645 9.85355L1.39645 7.10355C1.20118 6.90829 1.20118 6.59171 1.39645 6.39645C1.59171 6.20118 1.90829 6.20118 2.10355 6.39645L4.5 8.79289L10.3964 2.89645C10.5917 2.70118 10.9083 2.70118 11.1036 2.89645Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className="arrow-image">
        <div className="swiper swiper-horizontal" ref={scrollRef}>
          <div className="swiper-wrapper">
            {logo.map((logos, i) => (
              <div className="swiper-slide" key={i}>
                <img
                  src={logos}
                  alt={`Logos ${i + 1}`}
                  className="petopia-picture"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
