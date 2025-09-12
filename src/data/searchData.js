// src/data/searchData.js
import petopiaImg from "../assets/petopia.png";
import syncswapImg from "../assets/syncswap.png";
import animixImg from "../assets/animix.png";
import noonImg from "../assets/noon.png";
// import more images as needed

const searchData = [
  { id: "petopia", name: "Petopia", path: "/petopiaimage", img: petopiaImg },
  {
    id: "syncswap",
    name: "SyncSwap",
    path: "/syncswapimage",
    img: syncswapImg,
  },
  { id: "animix", name: "Animix", path: "/animiximage", img: animixImg },
  { id: "noon", name: "Noon", path: "/noonimage", img: noonImg },
  // add every page/app you want searchable
];

export default searchData;
