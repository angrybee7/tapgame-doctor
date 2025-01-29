import "./App.css";
import Header from "./components/layouts/Header";
import FooterNav from "./components/layouts/FooterNav";
import Home from "./components/home/Home";
import Staking from "./components/staking/Staking";
import Minting from "./components/minting/Minting";
import Reward from "./components/reward/Reward";
import Profile from "./components/profile/Profile";

import circle from "./assets/circle.png";
import gradient from "./assets/gradient.png";
import virus from "./assets/virus.png";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App ">
      <div className=" ">
        <img src={circle} className="z-0 absolute" />
        <img src={virus} className="z-0 absolute" />
        <img src={gradient} className="z-0 absolute mt-[-150px]" />
      </div>

      <div className=" bg-darkBlue h-screen overflow-auto">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/minting" element={<Minting />} />
            <Route path="/reward" element={<Reward />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <FooterNav />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
