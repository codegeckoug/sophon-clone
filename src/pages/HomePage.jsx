import Header from "../components/Header";
import "./HomePage.css";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import petopiaImg from "../assets/petopia.webp";
import pioneersImg from "../assets/pioneers.webp";
import moofoImg from "../assets/moofo1.webp";
import AdventureSection from "../components/AdventureSection";
import CollectionSection from "../components/CollectionSection";

const slides = [
  {
    title: "Petopia",
    description: "An intense top-down battle shooter",
    category: "Gaming",
    categoryLink: "/petopiaimage",
    viewLink: "/petopiaimage",
    imageLink: "/petopiaimage",
    image: petopiaImg,
  },
  {
    title: "MOO.F.O.",
    description: "Rescue cows. Fly UFOs. Save the Universe!",
    category: "Gaming",
    categoryLink: "/moofoimage",
    viewLink: "/moofoimage",
    imageLink: "/moofoimage",
    image: moofoImg,
  },
  {
    title: "Crypto Quest",
    description: "Embark on adventures powered by crypto",
    category: "Gaming",
    categoryLink: "/pioneerimage",
    viewLink: "/pioneerimage",
    imageLink: "/pioneerimage",
    image: pioneersImg,
  },
];

const WelcomeSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // autoplay effect (5 seconds)
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar-links">
            <a className="nav-item" href="/">
              <div className="nav-icon">
                <div className="icon-wrapper">
                  {/* Home Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="icon"
                  >
                    <path d="M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"></path>
                  </svg>
                </div>
              </div>
              <div className="nav-label">Home</div>
            </a>

            <a className="nav-item" href="https://app.sophon.xyz/activity">
              <div className="nav-icon">
                <div className="icon-wrapper">
                  {/* Activity Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="icon"
                  >
                    <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"></path>
                  </svg>
                </div>
              </div>
              <div className="nav-label">Activity</div>
            </a>

            <a
              className="nav-item"
              href="https://my.sophon.xyz/123b216c-678e-4611-af9a-2d5b7b061258?origin=https%3A%2F%2Fapp.sophon.xyz"
            >
              <div className="nav-icon">
                <div className="icon-wrapper">
                  {/* Profile Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="icon"
                  >
                    <path d="M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"></path>
                  </svg>
                </div>
              </div>
              <div className="nav-label">Profile</div>
            </a>
          </div>

          {/* Bottom Links */}
          <div className="sidebar-bottom">
            <div className="bottom-links">
              <a
                href="https://docs.sophon.xyz/discover/home/welcome"
                target="_blank"
                rel="noreferrer"
                className="bottom-link"
              >
                📘
              </a>
              <a
                href="https://discord.gg/2gdZvwF5gn"
                target="_blank"
                rel="noreferrer"
                className="bottom-link"
              >
                💬
              </a>
              <a
                href="https://x.com/sophon"
                target="_blank"
                rel="noreferrer"
                className="bottom-link"
              >
                ✖️
              </a>
            </div>
          </div>
        </div>
      </aside>
      <div className="welcome-container">
        <h5 className="welcome-title desktop">Welcome to Sophon Home</h5>
        <p className="welcome-text desktop">
          Discover fresh experiences - get rewarded for each adventure
        </p>

        <h5 className="welcome-title mobile">Welcome to Sophon Home</h5>
        <p className="welcome-text mobile">
          Discover fresh experiences - get rewarded for each adventure
        </p>
      </div>
      <div className="slider">
        {/* Slide */}
        <Link to={slides[current].imageLink}>
          <div
            className="slide"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="slide-content">
              <div className="slide-header">
                <h3 className="slide-title">{slides[current].title}</h3>
                <p className="slide-description">
                  {slides[current].description}
                </p>
              </div>
              <div className="slide-footer">
                <Link
                  to={slides[current].categoryLink}
                  className="slide-category"
                >
                  {slides[current].category}
                </Link>
                <Link to={slides[current].viewLink} className="slide-button">
                  View
                </Link>
              </div>
            </div>
          </div>
        </Link>

        {/* Controls */}
        <div className="slider-controls">
          <div className="dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              >
                {i === current && <span className="progress" />}
              </span>
            ))}
          </div>
          <div className="arrows">
            <button onClick={prevSlide} className="arrow">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="arrow">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <AdventureSection />
      <CollectionSection />
    </>
  );
};

export default WelcomeSection;
