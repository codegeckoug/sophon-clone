// src/components/AdventureSection.jsx

import React, { useRef } from "react";

import petopiaImg from "../assets/petopias.webp";
import pioneerImg from "../assets/pioneer.webp";
import moofoImg from "../assets/moofo2.webp";
import animixImg from "../assets/animix.webp";
import rivalryImg from "../assets/rivalry.svg";
import syncImg from "../assets/syncswap.webp";
import ragerImg from "../assets/rageroads.webp";
// replace with real path

function AdventureSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };
  return (
    <div className="adventure-wrapper">
      <div className="flex-content">
        <div className="adventure-des">
          <h2 className="section-title">Start your next adventure</h2>
          <div className="adventure-slide">
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
        </div>
        <div className="adventure-image-wrapper" ref={scrollRef}>
          <div>
            <a className="adventure-link" href="/hedgeimage">
              <div
                data-testid="highlight-partner-card-bg"
                className="highlight-partner-card-hedge"
              >
                <div
                  data-testid="highlight-partner-card-cover"
                  className="highlight-partner-card-cover hedge"
                  aria-label="Hedge Empire"
                ></div>
              </div>
              <div className="highlight-image-des">
                <p
                  data-testid="highlight-partner-card-description"
                  className="highlight-card-description"
                >
                  Onchain idle game: build your hedge fund
                </p>
                <div className="highlight-card-profile">
                  <img
                    alt="Hedge Empire"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="profile"
                    src="https://cdn.staging.sophon.xyz/partners/logos/hedgeempire.svg"
                    style={{ color: "transparent" }}
                  ></img>
                  <div className="profile-des">
                    <h6
                      data-testid="highlight-partner-card-title"
                      className="typo-h6 profile-title"
                    >
                      Hedge Empire
                    </h6>
                    <div className="profile-link">
                      <div className="profile-game-btn">
                        <a href="/hedgeimage">
                          <p className=" typo-label3">Gaming</p>
                        </a>
                      </div>
                      <div
                        data-testid="button-root"
                        data-slot="button"
                        className="hv-button-root"
                        role="button"
                        tabIndex={0}
                        aria-pressed="false"
                      >
                        <div
                          data-testid="button-inner"
                          className="hv-button-inner"
                        >
                          <div className="hv-button-content">
                            <div className="hv-button-content-center">
                              <a href="/hedgeimage">
                                <span
                                  data-testid="button-text"
                                  className="hv-button-text"
                                >
                                  View
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a className="adventure-link" href="/petopiaimage">
              <div
                data-testid="highlight-partner-card-bg"
                className="highlight-partner-card-petopia"
              >
                <div
                  data-testid="highlight-partner-card-cover"
                  className="highlight-partner-card-cover petopia"
                  aria-label="Hedge Empire"
                ></div>
              </div>
              <div className="highlight-image-des">
                <p
                  data-testid="highlight-partner-card-description"
                  className="highlight-card-description"
                >
                  An Intense Top-down battle shooter
                </p>
                <div className="highlight-card-profile">
                  <img
                    alt="Hedge Empire"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="profile"
                    src={petopiaImg}
                    style={{ color: "transparent" }}
                  ></img>
                  <div className="profile-des">
                    <h6
                      data-testid="highlight-partner-card-title"
                      className="typo-h6 profile-title"
                    >
                      Petopia
                    </h6>
                    <div className="profile-link">
                      <div className="profile-game-btn">
                        <a href="/petopiaimage">
                          <p className=" typo-label3">Gaming</p>
                        </a>
                      </div>
                      <div
                        data-testid="button-root"
                        data-slot="button"
                        className="hv-button-root"
                        role="button"
                        tabIndex={0}
                        aria-pressed="false"
                      >
                        <div
                          data-testid="button-inner"
                          className="hv-button-inner"
                        >
                          <div className="hv-button-content">
                            <div className="hv-button-content-center">
                              <a href="/petopiaimage">
                                <span
                                  data-testid="button-text"
                                  className="hv-button-text"
                                >
                                  View
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a className="adventure-link" href="/pioneerimage">
              <div
                data-testid="highlight-partner-card-bg"
                className="highlight-partner-card-pioneer"
              >
                <div
                  data-testid="highlight-partner-card-cover"
                  className="highlight-partner-card-cover pioneer"
                  aria-label="Hedge Empire"
                ></div>
              </div>
              <div className="highlight-image-des">
                <p
                  data-testid="highlight-partner-card-description"
                  className="highlight-card-description"
                >
                  Free-to-Play Fun-based Strategy game
                </p>
                <div className="highlight-card-profile">
                  <img
                    alt="Hedge Empire"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="profile"
                    src={pioneerImg}
                    style={{ color: "transparent" }}
                  ></img>
                  <div className="profile-des">
                    <h6
                      data-testid="highlight-partner-card-title"
                      className="typo-h6 profile-title"
                    >
                      Pioneers of New World
                    </h6>
                    <div className="profile-link">
                      <div className="profile-game-btn">
                        <a href="/pioneerimage">
                          <p className=" typo-label3">Gaming</p>
                        </a>
                      </div>
                      <div
                        data-testid="button-root"
                        data-slot="button"
                        className="hv-button-root"
                        role="button"
                        tabIndex={0}
                        aria-pressed="false"
                      >
                        <div
                          data-testid="button-inner"
                          className="hv-button-inner"
                        >
                          <div className="hv-button-content">
                            <div className="hv-button-content-center">
                              <a href="/pioneerimage">
                                <span
                                  data-testid="button-text"
                                  className="hv-button-text"
                                >
                                  View
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a className="adventure-link" href="/pioneerimage">
              <div
                data-testid="highlight-partner-card-bg"
                className="highlight-partner-card-moofo"
              >
                <div
                  data-testid="highlight-partner-card-cover"
                  className="highlight-partner-card-cover moofo"
                  aria-label="Hedge Empire"
                ></div>
              </div>
              <div className="highlight-image-des">
                <p
                  data-testid="highlight-partner-card-description"
                  className="highlight-card-description"
                >
                  Rescue cows.Fly UFOs.Save the universe!
                </p>
                <div className="highlight-card-profile">
                  <img
                    alt="Hedge Empire"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="profile"
                    src={moofoImg}
                    style={{ color: "transparent" }}
                  ></img>
                  <div className="profile-des">
                    <h6
                      data-testid="highlight-partner-card-title"
                      className="typo-h6 profile-title"
                    >
                      MOO.F.O
                    </h6>
                    <div className="profile-link">
                      <div className="profile-game-btn">
                        <a href="/moofoimage">
                          <p className=" typo-label3">Gaming</p>
                        </a>
                      </div>
                      <div
                        data-testid="button-root"
                        data-slot="button"
                        className="hv-button-root"
                        role="button"
                        tabIndex={0}
                        aria-pressed="false"
                      >
                        <div
                          data-testid="button-inner"
                          className="hv-button-inner"
                        >
                          <div className="hv-button-content">
                            <div className="hv-button-content-center">
                              <a href="/moofoimage">
                                <span
                                  data-testid="button-text"
                                  className="hv-button-text"
                                >
                                  View
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a className="adventure-link" href="/animiximage">
              <div
                data-testid="highlight-partner-card-bg"
                className="highlight-partner-card-animix"
              >
                <div
                  data-testid="highlight-partner-card-cover"
                  className="highlight-partner-card-cover animix"
                  aria-label="Hedge Empire"
                ></div>
              </div>
              <div className="highlight-image-des">
                <p
                  data-testid="highlight-partner-card-description"
                  className="highlight-card-description"
                >
                  Mix DNA & battle with fantastical pets
                </p>
                <div className="highlight-card-profile">
                  <img
                    alt="Hedge Empire"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="profile"
                    src={animixImg}
                    style={{ color: "transparent" }}
                  ></img>
                  <div className="profile-des">
                    <h6
                      data-testid="highlight-partner-card-title"
                      className="typo-h6 profile-title"
                    >
                      Animix
                    </h6>
                    <div className="profile-link">
                      <div className="profile-game-btn">
                        <a href="/animiximage">
                          <p className=" typo-label3">Gaming</p>
                        </a>
                      </div>
                      <div
                        data-testid="button-root"
                        data-slot="button"
                        className="hv-button-root"
                        role="button"
                        tabIndex={0}
                        aria-pressed="false"
                      >
                        <div
                          data-testid="button-inner"
                          className="hv-button-inner"
                        >
                          <div className="hv-button-content">
                            <div className="hv-button-content-center">
                              <a href="/animiximage">
                                <span
                                  data-testid="button-text"
                                  className="hv-button-text"
                                >
                                  View
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a className="adventure-link" href="/rivalryimage">
              <div
                data-testid="highlight-partner-card-bg"
                className="highlight-partner-card-rivalry"
              >
                <div
                  data-testid="highlight-partner-card-cover"
                  className="highlight-partner-card-cover rivalry"
                  aria-label="Hedge Empire"
                ></div>
              </div>
              <div className="highlight-image-des">
                <p
                  data-testid="highlight-partner-card-description"
                  className="highlight-card-description"
                >
                  The Ultimate crypto and casino sports book
                </p>
                <div className="highlight-card-profile">
                  <img
                    alt="Hedge Empire"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="profile"
                    src={rivalryImg}
                    style={{ color: "transparent" }}
                  ></img>
                  <div className="profile-des">
                    <h6
                      data-testid="highlight-partner-card-title"
                      className="typo-h6 profile-title"
                    >
                      Rivalry
                    </h6>
                    <div className="profile-link">
                      <div className="profile-game-btn">
                        <a href="/rivalryimage">
                          <p className=" typo-label3">lifestyle</p>
                        </a>
                      </div>
                      <div
                        data-testid="button-root"
                        data-slot="button"
                        className="hv-button-root"
                        role="button"
                        tabIndex={0}
                        aria-pressed="false"
                      >
                        <div
                          data-testid="button-inner"
                          className="hv-button-inner"
                        >
                          <div className="hv-button-content">
                            <div className="hv-button-content-center">
                              <a href="/rivalryimage">
                                <span
                                  data-testid="button-text"
                                  className="hv-button-text"
                                >
                                  View
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a className="adventure-link" href="/syncimage">
              <div
                data-testid="highlight-partner-card-bg"
                className="highlight-partner-card-sync"
              >
                <div
                  data-testid="highlight-partner-card-cover"
                  className="highlight-partner-card-cover sync"
                  aria-label="Hedge Empire"
                ></div>
              </div>
              <div className="highlight-image-des">
                <p
                  data-testid="highlight-partner-card-description"
                  className="highlight-card-description"
                >
                  Trade your Tokens Seamlessly
                </p>
                <div className="highlight-card-profile">
                  <img
                    alt="Hedge Empire"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="profile"
                    src={syncImg}
                    style={{ color: "transparent" }}
                  ></img>
                  <div className="profile-des">
                    <h6
                      data-testid="highlight-partner-card-title"
                      className="typo-h6 profile-title"
                    >
                      SyncSwap
                    </h6>
                    <div className="profile-link">
                      <div className="profile-game-btn">
                        <a href="/syncimage">
                          <p className=" typo-label3">DeFi</p>
                        </a>
                      </div>
                      <div
                        data-testid="button-root"
                        data-slot="button"
                        className="hv-button-root"
                        role="button"
                        tabIndex={0}
                        aria-pressed="false"
                      >
                        <div
                          data-testid="button-inner"
                          className="hv-button-inner"
                        >
                          <div className="hv-button-content">
                            <div className="hv-button-content-center">
                              <a href="/syncimage">
                                <span
                                  data-testid="button-text"
                                  className="hv-button-text"
                                >
                                  View
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a className="adventure-link" href="/rageimage">
              <div
                data-testid="highlight-partner-card-bg"
                className="highlight-partner-card-rager"
              >
                <div
                  data-testid="highlight-partner-card-cover"
                  className="highlight-partner-card-cover rager"
                  aria-label="Hedge Empire"
                ></div>
              </div>
              <div className="highlight-image-des">
                <p
                  data-testid="highlight-partner-card-description"
                  className="highlight-card-description"
                >
                  Race off-road,compete for rewards & prices
                </p>
                <div className="highlight-card-profile">
                  <img
                    alt="Hedge Empire"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="profile"
                    src={ragerImg}
                    style={{ color: "transparent" }}
                  ></img>
                  <div className="profile-des">
                    <h6
                      data-testid="highlight-partner-card-title"
                      className="typo-h6 profile-title"
                    >
                      Rage Roads
                    </h6>
                    <div className="profile-link">
                      <div className="profile-game-btn">
                        <a href="/rageimage">
                          <p className=" typo-label3">Gaming</p>
                        </a>
                      </div>
                      <div
                        data-testid="button-root"
                        data-slot="button"
                        className="hv-button-root"
                        role="button"
                        tabIndex={0}
                        aria-pressed="false"
                      >
                        <div
                          data-testid="button-inner"
                          className="hv-button-inner"
                        >
                          <div className="hv-button-content">
                            <div className="hv-button-content-center">
                              <a href="/rageimage">
                                <span
                                  data-testid="button-text"
                                  className="hv-button-text"
                                >
                                  View
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdventureSection;
