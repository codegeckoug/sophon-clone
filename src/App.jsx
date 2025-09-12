import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Homepage from "./pages/HomePage";
import Petopia from "./pages/Petopia";
import PetopiaPicture from "./pages/Petopia/PetopiaPicture";
import PetopiaImage from "./pages/Petopia/PetopiaImage";

import Pioneers from "./pages/Pioneers";
import PioneerImage from "./pages/Pioneers/PioneerImage";

import PioneerPicture from "./pages/Pioneers/PioneerPicture";
import Moofo from "./pages/Moofo";
import MoofoImage from "./pages/Moofo/MoofoImage";
import MoofoPicture from "./pages/Moofo/MoofoPicture";

import Hedge from "./pages/Hedge";
import HedgeImage from "./pages/Hedge/HedgeImage";
import HedgePicture from "./pages/Hedge/HedgePicture";

import Animix from "./pages/Animix";
import AnimixImage from "./pages/Animix/AnimixImage";
import AnimixPicture from "./pages/Animix/AnimixPicture";

import Rivalry from "./pages/Rivalry";
import RivalryImage from "./pages/Rivalry/RivalryImage";
import RivalryPicture from "./pages/Rivalry/RivalryPicture";

import Sync from "./pages/Sync";
import SyncImage from "./pages/Sync/SyncImage";
import SyncPicture from "./pages/Sync/SyncPicture";

import Rage from "./pages/Rage";
import RageImage from "./pages/Rage/RageImage";
import RagePicture from "./pages/Rage/RagePicture";

import Farm from "./pages/Farm";
import FarmImage from "./pages/Farm/FarmImage";
import FarmPicture from "./pages/Farm/FarmPicture";

import Master from "./pages/Master";
import MasterImage from "./pages/Master/MasterImage";
import MasterPicture from "./pages/Master/MasterPicture";

import Guardian from "./pages/Guardian";
import GuardianImage from "./pages/Guardian/GuardianImage";
import GuardianPicture from "./pages/Guardian/GuardianPicture";

import Orbit from "./pages/Orbit";
import OrbitImage from "./pages/Orbit/OrbitImage";
import OrbitPicture from "./pages/Orbit/OrbitPicture";

import Open from "./pages/Open";
import OpenImage from "./pages/Open/OpenImage";
import OpenPicture from "./pages/Open/OpenPicture";

import Sph from "./pages/Sph";
import SphImage from "./pages/Sph/SphImage";
import SphPicture from "./pages/Sph/SphPicture";

import Poker from "./pages/Poker";
import PokerImage from "./pages/Poker/PokerImage";
import PokerPicture from "./pages/Poker/PokerPicture";

import Layer from "./pages/Layer";
import LayerImage from "./pages/Layer/LayerImage";
import LayerPicture from "./pages/Layer/LayerPicture";

import Noon from "./pages/Noon";
import NoonImage from "./pages/Noon/NoonImage";
import NoonPicture from "./pages/Noon/NoonPicture";

import Nova from "./pages/Nova";
import NovaImage from "./pages/Nova/NovaImage";
import NovaPicture from "./pages/Nova/NovaPicture";

import Explore from "./pages/Explore";
import ExploreImage from "./pages/Explore/ExploreImage";

import Score from "./pages/Score";
import ScoreImage from "./pages/Score/ScoreImage";
import ScorePicture from "./pages/Score/ScorePicture";

import Brutal from "./pages/Brutal";
import BrutalImage from "./pages/Brutal/BrutalImage";
import BrutalPicture from "./pages/Brutal/BrutalPicture";

import Bridge from "./pages/Bridge";
import BridgeImage from "./pages/Bridge/BridgeImage";
import BridgePicture from "./pages/Bridge/BridgePicture";

import Mintify from "./pages/Mintify";
import MintifyImage from "./pages/Mintify/MintifyImage";
import MintifyPicture from "./pages/Mintify/MintifyPicture";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* Petopia Routes */}
        <Route path="/petopia" element={<Petopia />} />
        <Route path="/petopiaimage" element={<PetopiaImage />} />
        <Route path="/petopiapicture" element={<PetopiaPicture />} />

        {/* Pioneers Routes */}
        <Route path="/pioneers" element={<Pioneers />} />
        <Route path="/pioneerimage" element={<PioneerImage />} />
        <Route path="/pioneerpicture" element={<PioneerPicture />} />

        {/* Moofo Routes */}
        <Route path="/moofo" element={<Moofo />} />
        <Route path="/moofoimage" element={<MoofoImage />} />
        <Route path="/moofopicture" element={<MoofoPicture />} />

        {/*Hedge Routes */}
        <Route path="/hedge" element={<Hedge />} />
        <Route path="/hedgeimage" element={<HedgeImage />} />
        <Route path="/hedgepicture" element={<HedgePicture />} />

        {/* Animix*/}
        <Route path="/animix" element={<Animix />} />
        <Route path="/animiximage" element={<AnimixImage />} />
        <Route path="/animixpicture" element={<AnimixPicture />} />

        {/* Rivalry*/}
        <Route path="/rivalry" element={<Rivalry />} />
        <Route path="/rivalryimage" element={<RivalryImage />} />
        <Route path="/rivalrypicture" element={<RivalryPicture />} />

        {/* sync*/}
        <Route path="/sync" element={<Sync />} />
        <Route path="/syncimage" element={<SyncImage />} />
        <Route path="/syncpicture" element={<SyncPicture />} />

        {/* rage*/}
        <Route path="/rage" element={<Rage />} />
        <Route path="/rageimage" element={<RageImage />} />
        <Route path="/ragepicture" element={<RagePicture />} />

        {/*Farm*/}
        <Route path="/farm" element={<Farm />} />
        <Route path="/farmimage" element={<FarmImage />} />
        <Route path="/farmpicture" element={<FarmPicture />} />

        {/*master*/}
        <Route path="/master" element={<Master />} />
        <Route path="/masterimage" element={<MasterImage />} />
        <Route path="/masterpicture" element={<MasterPicture />} />

        {/* Guardian */}
        <Route path="/guardian" element={<Guardian />} />
        <Route path="/guardianimage" element={<GuardianImage />} />
        <Route path="/guardianpicture" element={<GuardianPicture />} />

        {/* Orbit */}
        <Route path="/orbit" element={<Orbit />} />
        <Route path="/orbitimage" element={<OrbitImage />} />
        <Route path="/orbitpicture" element={<OrbitPicture />} />

        {/* Open */}
        <Route path="/open" element={<Open />} />
        <Route path="/openimage" element={<OpenImage />} />
        <Route path="/openpicture" element={<OpenPicture />} />

        {/* Open */}
        <Route path="/sph" element={<Sph />} />
        <Route path="/sphimage" element={<SphImage />} />
        <Route path="/sphpicture" element={<SphPicture />} />
        {/* poker*/}
        <Route path="/poker" element={<Poker />} />
        <Route path="/pokerimage" element={<PokerImage />} />
        <Route path="/pokerpicture" element={<PokerPicture />} />

        {/* layer*/}
        <Route path="/layer" element={<Layer />} />
        <Route path="/layerimage" element={<LayerImage />} />
        <Route path="/layerpicture" element={<LayerPicture />} />

        {/* Noon*/}
        <Route path="/noon" element={<Noon />} />
        <Route path="/noonimage" element={<NoonImage />} />
        <Route path="/noonpicture" element={<NoonPicture />} />

        {/* Nova*/}
        <Route path="/nova" element={<Nova />} />
        <Route path="/novaimage" element={<NovaImage />} />
        <Route path="/novapicture" element={<NovaPicture />} />

        {/*Explore*/}
        <Route path="/explore" element={<Explore />} />
        <Route path="/exploreimage" element={<ExploreImage />} />

        {/*Score*/}
        <Route path="/score" element={<Score />} />
        <Route path="/scoreimage" element={<ScoreImage />} />
        <Route path="/scorepicture" element={<ScorePicture />} />

        {/*Brutal*/}
        <Route path="/brutal" element={<Brutal />} />
        <Route path="/brutalimage" element={<BrutalImage />} />
        <Route path="/brutalpicture" element={<BrutalPicture />} />

        {/*Bridge*/}
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/bridgeimage" element={<BridgeImage />} />
        <Route path="/bridgepicture" element={<BridgePicture />} />

        {/*Mintify*/}
        <Route path="/mintify" element={<Mintify />} />
        <Route path="/mintifyimage" element={<MintifyImage />} />
        <Route path="/mintifypicture" element={<MintifyPicture />} />
      </Routes>
    </Router>
  );
}

export default App;
