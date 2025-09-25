import React, { useState } from "react";
import animix from "../assets/animix.webp";
import sync from "../assets/syncswap.png";
import farm from "../assets/farm.webp";
import master from "../assets/play.webp";
import guardian from "../assets/guardian.webp";
import orbit from "../assets/orbiter.webp";
import open from "../assets/open.webp";
import sph from "../assets/sphnx.webp";
import poker from "../assets/lepoker.webp";
import petopia from "../assets/petopias1.webp";
import pioneer from "../assets/pioneer.webp";
import layer from "../assets/layerswap.svg";
import noon from "../assets/noon.svg";
import nova from "../assets/nova.webp";
import explore from "../assets/explorer.webp";
import rival from "../assets/rivalry.svg";
import score from "../assets/scoreplay.webp";
import brutal from "../assets/brutal.webp";
import bridge from "../assets/portal.webp";
import mintify from "../assets/mintify.webp";
import hedge from "../assets/hedgeempire.svg";
import rage from "../assets/rageroads.webp";
import finance from "../assets/stargate.webp";
import moofo from "../assets/moofo.webp";
import debridge from "../assets/debridge.webp";

export default function CategoryPills() {
  const [activeCategory, setActiveCategory] = useState("All");

  // 🔹 Example category → links mapping
  const categoryLinks = {
    All: [
      {
        name: "SyncSwap",
        url: "/syncimage",
        description: "Trade your token seamlessly",
        category: "DeFi",
        image: sync,
      },
      {
        name: "The Farm",
        url: "/farmimage",
        description: "Farm and accrue points that become ..",
        category: "DeFi",
        image: farm,
      },
      {
        name: "(((+)))",
        url: "/masterimage",
        description: "Your mastery may echo through the void",
        category: "Gaming",
        image: master,
      },
      {
        name: "Guardian",
        url: "/guardianimage",
        description: "Manage your Guardian nodes and rewards",
        category: "Essentials",
        image: guardian,
      },
      {
        name: "Orbiter",
        url: "/orbitimage",
        description: " A decentralized cross-rollup bridge ...",
        category: "DeFi",
        image: orbit,
      },
      {
        name: "Open",
        url: "/openimage",
        description: " Buy tickets to major events onchain",
        category: "Lifestyle",
        image: open,
      },
      {
        name: "Sphnx",
        url: "/sphimage",
        description: " Make SPHNX say the forbidden...",
        category: "Gaming",
        image: sph,
      },
      {
        name: "Le Poker",
        url: "/pokerimage",
        description: " Free & Fair community poker games",
        category: "Lifestyle",
        image: poker,
      },
      {
        name: "Petopia",
        url: "/petopiaimage",
        description: " An intense top-down battle shooter",
        category: "Gaming",
        image: petopia,
      },
      {
        name: "Pionners of New World",
        url: "/pioneerimage",
        description: "Feel free to play fun...",
        category: "Gaming",
        image: pioneer,
      },
      {
        name: "Animix",
        url: "/animiximage",
        description: "Mix DNA and battle with fantastical...",
        category: "Gaming",
        image: animix,
      },
      {
        name: "Layerswap",
        url: "/layerimage",
        description: "    Fast cross-chain crypto transfers",
        category: "DeFi",
        image: layer,
      },
      {
        name: "Noon",
        url: "/noonimage",
        description: " A smart yield-generating stable coin",
        category: "DeFi",
        image: noon,
      },
      {
        name: "Nova",
        url: "/novaimage",
        description: "Play fun mini-games, earn rewards...",
        category: "Gaming",
        image: nova,
      },
      {
        name: "Explorer",
        url: "/exploreimage",
        description: " Browse Sophon's transactions...",
        category: "Essentials",
        image: explore,
      },
      {
        name: "Rivalry",
        url: "/rivalryimage",
        description: "The ultimate crypto &  casino...",
        category: "Lifestyle",
        image: rival,
      },
      {
        name: "ScorePlay",
        url: "/scoreimage",
        description: "AI-powered sports information...",
        category: "Gaming",
        image: score,
      },
      {
        name: "Brutal Knights",
        url: "/brutalimage",
        description: "  A medieval turn-based strategy game",
        category: "Gaming",
        image: brutal,
      },
      {
        name: "Bridge",
        url: "/bridgeimage",
        description: " Bridge tokens from Ethereum...",
        category: "Essentials",
        image: bridge,
      },
      {
        name: "Mintify",
        url: "/mintifyimage",
        description: "   Trade any asset and every...",
        category: "NFT",
        image: mintify,
      },
      {
        name: "Hedge Empire",
        url: "/hedgeimage",
        description: "Onchain idle-game: build yo....",
        category: "Gaming",
        image: hedge,
      },
      {
        name: "Rage Roads",
        url: "/rageimage",
        description: "Race-off-road.Compete f..",
        category: "Gaming",
        image: rage,
      },
      {
        name: "MOO.F.O",
        url: "/moofoimage",
        description: "Rescue cows.Fly UFOs,save the..",
        category: "Gaming",
        image: moofo,
      },
      {
        name: "Stargate Finance",
        url: "/financeimage",
        description: "The global liquidity layer",
        category: "DeFi",
        image: finance,
      },
      {
        name: "deBridge",
        url: "/debridgeimage",
        description: " Transfer crypto assets at lightspeed",
        category: "DeFi",
        image: debridge,
      },
    ],

    Gaming: [
      {
        name: "(((+)))",
        url: "/masterimage",
        description: "Your mastery may echo through the void",
        category: "Gaming",
        image: master,
      },
      {
        name: "Sphnx",
        url: "/sphimage",
        description: " Make SPHNX say the forbidden word to win",
        category: "Gaming",
        image: sph,
      },
      {
        name: "Petopia",
        url: "/petopiaimage",
        description: " An intense top-down battle shooter",
        category: "Gaming",
        image: petopia,
      },
      {
        name: "Pionners of New World",
        url: "/pioneerimage",
        description: " Feel free to play turn-based strategy game",
        category: "Gaming",
        image: pioneer,
      },
      {
        name: "Animix",
        url: "/animiximage",
        description: "Mix DNA and battle with fantastical...",
        category: "Gaming",
        image: animix,
      },
      {
        name: "Nova",
        url: "/novaimage",
        description: "Play fun mini-games, earn rewards...",
        category: "Gaming",
        image: nova,
      },
      {
        name: "ScorePlay",
        url: "/scoreimage",
        description: "AI-powered sports information...",
        category: "Gaming",
        image: score,
      },
      {
        name: "Brutal Knights",
        url: "/brutalimage",
        description: "  A medieval turn-based strategy game",
        category: "Gaming",
        image: brutal,
      },
      {
        name: "Hedge Empire",
        url: "/hedgeimage",
        description: "Onchain idle-game: build yo....",
        category: "Gaming",
        image: hedge,
      },
      {
        name: "Rage Roads",
        url: "/rageimage",
        description: "Race-off-road.Compete f..",
        category: "Gaming",
        image: rage,
      },
      {
        name: "MOO.F.O",
        url: "/moofoimage",
        description: "Rescue cows.Fly UFOs,save the..",
        category: "Gaming",
        image: moofo,
      },
    ],

    DeFi: [
      {
        name: "SyncSwap",
        url: "/syncimage",
        description: "Trade your token seamlessly",
        category: "DeFi",
        image: sync,
      },
      {
        name: "Orbiter",
        url: "/orbitimage",
        description:
          " A decentralized cross-rollup bridge that offers secure, low cost and almost instant transfer",
        category: "DeFi",
        image: orbit,
      },
      {
        name: "The Farm",
        url: "/farmimage",
        description: "Farm and accrue points that become $SOPH",
        category: "DeFi",
        image: farm,
      },
      {
        name: "Layerswap",
        url: "/layerimage",
        description: "    Fast cross-chain crypto transfers",
        category: "DeFi",
        image: layer,
      },
      {
        name: "noon",
        url: "/noonimage",
        description: " A smart yield-generating stable coin",
        category: "DeFi",
        image: noon,
      },
      {
        name: "Stargate Finance",
        url: "/financeimage",
        description: "The global liquidity layer",
        category: "DeFi",
        image: finance,
      },
      {
        name: "deBridge",
        url: "/debridgeimage",
        description: " Transfer crypto assets at lightspeed",
        category: "DeFi",
        image: debridge,
      },
    ],

    Lifestyle: [
      {
        name: "Noon",
        url: "/noonimage",
        description: "Daily lifestyle superapp",
        category: "Lifestyle",
        image: animix,
      },

      {
        name: "Open",
        url: "/openimage",
        description: " Buy tickets to major events onchain",
        category: "Lifestyle",
        image: open,
      },
      {
        name: "Le Poker",
        url: "/pokerimage",
        description: " Free & Fair community poker games",
        category: "Lifestyle",
        image: poker,
      },
      {
        name: "Rivalry",
        url: "/rivalryimage",
        description: "The ultimate crypto &  casino...",
        category: "Lifestyle",
        image: rival,
      },
    ],

    NFT: [
      {
        name: "Mintify",
        url: "/mintifyimage",
        description: "   Trade any asset and every...",
        category: "NFT",
        image: mintify,
      },
    ],
    Essentials: [
      {
        name: "Guardian",
        url: "/guardianimage",
        description: "Manage your Guardian nodes and rewards",
        category: "Essentials",
        image: guardian,
      },
      {
        name: "Explorer",
        url: "/exploreimage",
        description: " Browse Sophon's transactions...",
        category: "Essentials",
        image: explore,
      },
      {
        name: "Bridge",
        url: "/bridgeimage",
        description: " Bridge tokens from Ethereum...",
        category: "Essentials",
        image: bridge,
      },
    ],
  };

  return (
    <div className="category-wrapper">
      <div className="category-inner">
        <div className="category-header">
          <h5 className="typo-h5">Explore Top Apps</h5>
        </div>

        <div className="pill-scroll">
          {Object.keys(categoryLinks).map((category) => (
            <button
              key={category}
              data-testid="pill-button"
              className={`pill-button ${
                activeCategory === category ? "pill-active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <div data-testid="pill-label" className="pill-label">
                {category}
              </div>
            </button>
          ))}
        </div>

        {/* 🔹 Show links for active category */}
        <div className="category-links">
          {categoryLinks[activeCategory].map((link, i) => (
            <a key={i} href={link.url} className="category-item">
              <div className="item-image">
                <img
                  src={link.image}
                  alt={link.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="item-content">
                <h4 className="item-title">{link.name}</h4>
                <p className="item-description">{link.description}</p>
                <div className="item-buttons">
                  <button className="category-btn">{link.category}</button>
                  <button className="view-btn">View</button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
