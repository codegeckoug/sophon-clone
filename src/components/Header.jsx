import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/logo (1).svg";
import syncswap from "../assets/syncswap.webp";
import petopia from "../assets/petopia.webp";
import animix from "../assets/animix.webp";
import moofo from "../assets/moofo.webp";
import pioneer from "../assets/pioneer.webp";
import hedge from "../assets/hedgeempire.svg";
import rivalry from "../assets/rivalry.svg";
import rage from "../assets/rageroads.webp";
import orbit from "../assets/orbiter.webp";
import master from "../assets/play.webp";
import guardian from "../assets/guardian.webp";
import farm from "../assets/farm.webp";
import open from "../assets/open.webp";
import sph from "../assets/sphnx.webp";
import poker from "../assets/lepoker.webp";
import layer from "../assets/layerswap.svg";
import noon from "../assets/noon.svg";
import nova from "../assets/nova.webp";
import explore from "../assets/explorer.webp";
import rival from "../assets/rivalry.svg";
import brutal from "../assets/brutal.webp";
import bridge from "../assets/portal.webp";
import mintify from "../assets/mintify.webp";

const apps = [
  {
    name: "SyncSwap",
    image: syncswap,
    link: "/syncimage",
    featured: true,
  },
  { name: "Petopia", image: petopia, link: "/petopiaimage", featured: true },
  {
    name: "Animix",
    image: animix,
    link: "/animiximage",
    featured: true,
  },
  {
    name: "Noon",
    image: noon,
    link: "/noonimage",
    featured: true,
  },

  // extra apps (only show when typed)
  { name: "MOO.F.O", image: moofo, link: "/moofoimage" },
  { name: "Pionners", image: pioneer, link: "/pioneerimage" },
  { name: "Hedge Empire", image: hedge, link: "/hedgeimage" },
  { name: "Rivalry", image: rivalry, link: "/rivalryimage" },
  { name: "Rage Roads", image: rage, link: "/rageimage" },
  { name: "Orbit", image: orbit, link: "/orbitimage" },
  { name: "Guardian", image: guardian, link: "/guardianimage" },
  { name: "(((+)))", image: master, link: "/masterimage" },
  { name: "The Farms", image: farm, link: "/farmimage" },
  { name: "OPEN", image: open, link: "/openimage" },
  { name: "SPHNX", image: sph, link: "/sphimage" },
  { name: "Le Poker", image: poker, link: "/pokerimage" },
  { name: "Layerswap", image: layer, link: "/layerimage" },
  { name: "Nova", image: nova, link: "/novaimage" },
  { name: "Explorer", image: explore, link: "/exploreimage" },
  { name: "Rivalry", image: rival, link: "/rivalryimage" },
  { name: "Brutal Knights", image: brutal, link: "/brutalimage" },
  { name: "Bridge", image: bridge, link: "/bridgeimage" },
  { name: "Mintify", image: mintify, link: "/mintifyimage" },
];

export default function Header() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);

  // ✅ Show featured if query empty, else filter all
  const filtered = query.trim()
    ? apps.filter((app) => app.name.toLowerCase().includes(query.toLowerCase()))
    : apps.filter((app) => app.featured);

  // Close dropdown when clicking outside or pressing ESC
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Handle Enter key in input
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && filtered.length > 0) {
      window.location.href = filtered[0].link;
      setOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <div className="nav-logo">
            <a className="logo-link" href="/">
              <img
                src={Logo}
                alt="Logo"
                loading="lazy"
                width="64"
                height="32"
                decoding="async"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>

        {/* Search */}
        <div className="search-container" ref={searchRef}>
          <div className="search-bar-wrapper" style={{ position: "relative" }}>
            <div className="search-bar" tabIndex="-1">
              {/* 🔍 Icon */}
              <div className="search-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="search-icon"
                >
                  <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" />
                </svg>
              </div>

              {/* 📝 Input */}
              <input
                placeholder="Search apps"
                type="text"
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setOpen(true)}
                onKeyDown={handleInputKeyDown}
              />
            </div>

            {/* Dropdown container */}
            {open && filtered.length > 0 && (
              <div className="search-dropdown">
                <p className="dropdown-title">
                  {query ? "Results" : "Trending apps"}
                </p>
                <div className="dropdown-grid">
                  {filtered.map((app) => (
                    <a
                      key={app.name}
                      href={app.link}
                      className="dropdown-item"
                      onClick={() => setOpen(false)}
                    >
                      <div className="dropdown-card">
                        <img
                          src={app.image}
                          alt={app.name}
                          className="dropdown-img"
                        />
                        <span className="dropdown-name">{app.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="button-wrapper">
          <button
            className="button-root"
            onClick={() =>
              (window.location.href =
                "https://my.sophon.xyz/?origin=https%3A%2F%2Fapp.sophon.xyz")
            }
          >
            <span className="button-text">Log in</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
