import React, { useState, useRef } from "react";
import petopiaLogo from "../../assets/petopia.webp";
import pioneer1 from "../../assets/pioneer1.webp";
import pioneer2 from "../../assets/pioneer2.webp";
import pioneer3 from "../../assets/pioneer3.webp";
import pioneer4 from "../../assets/pioneer4.webp";
const logos = [petopiaLogo, pioneer1, pioneer2, pioneer3, pioneer4];

function Sidebar() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    // Copy text or link to clipboard
    navigator.clipboard
      .writeText(window.location.href) // copies current page URL
      .then(() => {
        setCopied(true);

        // Reset message after 2s
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
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
    <div className="sidebar-container">
      <div className="sidebar-inner">
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
      </div>
      <main className="main">
        <div className="petopia-container">
          <img
            alt="Petopia"
            loading="lazy"
            width="204"
            height="204"
            decoding="async"
            className="petopia-img"
            src="https://cdn.staging.sophon.xyz/partners/logos/petopia.webp"
            style={{ color: "transparent" }}
          />
          <div className="petopia-content">
            <div className="petopia-texts">
              <h3 className="petopia-title">Petopia</h3>
              <h3 className="petopia-title-mobile">Petopia</h3>
              <p className="petopia-desc">An intense top-down battle shooter</p>
              <p className="petopia-desc-mobile">
                An intense top-down battle shooter
              </p>
            </div>

            <div className="petopia-footer">
              <div className="petopia-labels">
                <p className="petopia-company">Mirai Labs</p>
                <div className="petopia-badge-wrapper">
                  <div className="petopia-badge">
                    <p className="petopia-badge-text">Gaming</p>
                  </div>
                </div>
              </div>

              <div className="petopia-buttons">
                <button className="petopia-btn-share" onClick={handleShare}>
                  <div className="btn-inner">
                    <div className="btn-text">
                      <span className="btn-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          className="icon"
                        >
                          <path d="M237.66,117.66l-80,80A8,8,0,0,1,144,192V152.23c-57.1,3.24-96.25,40.27-107.24,52h0a12,12,0,0,1-20.68-9.58c3.71-32.26,21.38-63.29,49.76-87.37,23.57-20,52.22-32.69,78.16-34.91V32a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,237.66,117.66Z"></path>
                        </svg>
                      </span>
                      <span className="btn-label">
                        {copied ? "Copied!" : "Share"}
                      </span>
                    </div>
                  </div>
                </button>

                <a
                  className="petopia-btn-launch"
                  target="_blank"
                  rel="noreferrer"
                  href="https://petopiagame.io/"
                >
                  <div className="btn-inner">
                    <div className="btn-text">
                      <span className="btn-label">Launch</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="divider-container">
          <hr className="divider-line" />
        </div>
        <div className="image-section">
          <div className="image-wrapper">
            <div className="hide-scrollbar" ref={scrollRef}>
              {logos.map((logo, i) => (
                <div className="cursor-pointer" key={i}>
                  <div className="image">
                    <a href="/petopiapicture">
                      <img
                        src={logo}
                        alt={`Logo ${i + 1}`}
                        className="petopia-image"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="scroll-buttons">
              <div className="scroll-left">
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
          </div>
          <div className="image-description-wrapper">
            <div className="description-container">
              <div className="description">
                <h5 className="typo-h5">About this app</h5>
                <div className="image-info">
                  <h4 className="typo-h6">Introduction</h4>
                  <p className="typo-p2">
                    Petopia is the ultimate Battle Arena where pet heroes and
                    plant monsters collide in action-packed shooting fun!
                  </p>
                  <p className="typo-p2">
                    This thrilling hero Roguelite/Dungeon Crawler adventure
                    features dynamic boss fights and competitive PvP action.
                    Enhance your strategy, reflexes, and teamwork in every
                    battle as you embark on a daring adventure through complex
                    dungeons, each culminating in a showdown with a formidable
                    boss.
                  </p>
                  <hr className="divider"></hr>
                  <h4 className="typo-h6">Features &amp; Benefits</h4>
                  <p className="typo-p2">
                    🔥 <span className="txt">Thrilling Adventure</span> –
                    Experience non-stop action in this battle arena game filled
                    with Roguelite dungeon crawling and intense shooting
                    gameplay.
                  </p>
                  <p className="typo-p2">
                    ⚔️ <span className="txt">Arena Combat</span> – Test your
                    skills against formidable bosses and other players in
                    competitive online PvP matches that keep you coming back for
                    more.
                  </p>
                  <p className="typo-p2">
                    🦊 <span className="txt">Hero Progression</span> – Unlock
                    new heroes by winning battles and customize their abilities
                    with upgradeable skills and weapons to suit your playstyle.
                  </p>
                  <p className="typo-p2">
                    🗡️ <span className="txt">Devastating Weapons</span> – Master
                    three unique weapons per character, each with special
                    attacks and active skills that help you conquer both PvE
                    dungeons and PvP battles.
                  </p>
                  <p className="typo-p2">
                    🎯 <span className="txt">Challenging Dungeons</span> –
                    Navigate through increasingly difficult dungeons filled with
                    enemies and obstacles, culminating in epic boss battles that
                    test your mastery.
                  </p>
                  <p className="typo-p2">
                    🕹️ <span className="txt">Multiple Game Modes</span> – Switch
                    between challenging PvE adventures and competitive PvP
                    battles to enjoy varied gameplay experiences.
                  </p>
                  <p className="typo-p2">
                    🛡️ <span className="txt">Guild System</span> – Join forces
                    with other players in a guild to compete against rival
                    guilds, climb the leaderboard, and win massive rewards
                    through teamwork.
                  </p>
                  <hr className="divider" />
                  <h4 className="typo-h6">More details</h4>
                  <ul>
                    <li className="list-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z"></path>
                      </svg>
                      <p class="typo-p2">
                        <span class="txt">Facebook:</span>{" "}
                        <a
                          href="https://www.facebook.com/Official.Petopia"
                          rel="noopener noreferrer"
                          className="list-link"
                        >
                          https://www.facebook.com/Official.Petopia
                        </a>
                      </p>
                    </li>
                    <li className="list-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z"></path>
                      </svg>
                      <p className="typo-p2">
                        <span className="txt">X:</span>{" "}
                        <a
                          href="https://x.com/PetopiaOfficial"
                          rel="noopener noreferrer"
                          className="list-link"
                        >
                          https://x.com/PetopiaOfficial
                        </a>
                      </p>
                    </li>
                    <li className="list-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z"></path>
                      </svg>
                      <p className="typo-p2">
                        <span className="txt">Telegram:</span>{" "}
                        <a
                          href="https://telegram.me/PetopiaOfficial"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="list-link"
                        >
                          https://telegram.me/PetopiaOfficial
                        </a>
                      </p>
                    </li>
                    <li className="list-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z"></path>
                      </svg>
                      <p className="typo-p2">
                        <span className="txt">Discord:</span>{" "}
                        <a
                          href="https://discord.gg/TxayWTRZhG"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="list-link"
                        >
                          https://discord.gg/TxayWTRZhG
                        </a>
                      </p>
                    </li>
                    <li className="list-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z"></path>
                      </svg>
                      <p className="typo-p2">
                        <span className="txt">Website:</span>{" "}
                        <a
                          href="https://about.petopiagame.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="list-link"
                        >
                          https://about.petopiagame.io/
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
