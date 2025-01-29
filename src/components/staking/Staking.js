import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import FooterNav from "../layouts/FooterNav";
import staking_avatar1 from "../../assets/staking_avatar1.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";


const Staking = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 12,
    mins: 10,
    secs: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, mins, secs } = prev;
        if (secs > 0) return { ...prev, secs: secs - 1 };
        if (mins > 0) return { ...prev, mins: mins - 1, secs: 59 };
        if (hours > 0) return { ...prev, hours: hours - 1, mins: 59, secs: 59 };
        if (days > 0) return { ...prev, days: days - 1, hours: 23, mins: 59, secs: 59 };
        return prev; // Stop at 0
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-16 h-screen text-white flex flex-col justify-between items-center py-2 min-w-[320px] max-w-full">
      <main className="p-3 pb-20 sm:p-4 space-y-4 w-full">
        
        {/* NFT Staked Section */}
        <section className="bg-gray-800 py-2 border border-gray-700 rounded-2xl space-y-3 px-2">
          <div className="bg-gray-800 rounded-lg flex flex-col gap-2 sm:flex-row items-center justify-between shadow-lg w-full p-2">
            {/* NFT and Title */}
            <div className="flex items-center space-x-3">
              <img src={staking_avatar1} alt="NFT" className="w-12 h-12 sm:w-16 sm:h-16 object-cover" />
              <div className="text-left">
                <h3 className="text-white font-bold text-lg sm:text-2xl">STAKED NFT</h3>
                <p className="text-blue-400 text-xs sm:text-sm">
                  YOUR REWARD: <span className="text-yellow-400">BNB: $56.90</span>
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex space-x-1 sm:space-x-2 text-center rounded-lg p-2 border border-blue-700 bg-blue-950 text-xs sm:text-sm">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="px-1">
                  <p className="text-blue-400 font-bold">{value}</p>
                  <p className="text-gray-400">{unit.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stake Your NFT Section */}
        <section className="bg-gray-800 pb-5 border border-gray-700 rounded-2xl ">
          <div className="flex items-center justify-center">
            <div className="rounded-b-lg bg-[#181f32] border border-blue-700 py-1 px-6 sm:px-12">
              <h2 className="text-blue-700 font-bold text-xs sm:text-sm text-center">
                STAKE YOUR NFT'S
              </h2>
            </div>
          </div>

          {/* Staked NFTs Info */}
          {[{ img: avatar1, title: "STAKED NFT'S", desc: "YOUR CURRENT STAKED NFT'S" },
            { img: avatar2, title: "STAKED EARNED", desc: "TOTAL REWARD EARNED FROM STAKING" }]
            .map((item, index) => (
              <div key={index} className="flex justify-between border-b border-gray-700 p-2 sm:p-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="bg-blue-500 flex items-center justify-center rounded-md p-1 sm:p-2">
                    <img className="w-8 sm:w-10" src={item.img} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-white text-sm sm:text-xl">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-blue-400">{item.desc}</p>
                  </div>
                </div>
                {/* Amount Display */}
                <div className="flex flex-col items-end">
                  <span className="font-bold text-yellow-400 text-xs sm:text-sm">BNB: $56.90</span>
                  <span className="font-bold text-blue-400 text-xs sm:text-xl">QTY: 20</span>
                </div>
              </div>
          ))}
        </section>

        {/* Final Section */}
        <section className="bg-gray-800 py-2 border border-gray-700 rounded-2xl px-2">
          <div className="bg-gray-800 rounded-lg flex items-center justify-between shadow-lg w-full p-2">
            {/* NFT and Title */}
            <div className="flex items-center space-x-3">
              <img src={staking_avatar1} alt="NFT" className="w-12 h-12 sm:w-16 sm:h-16 object-cover" />
              <div className="text-left">
                <h3 className="text-white font-bold text-lg sm:text-2xl">STAKED NFT</h3>
                <p className="text-blue-400 text-xs sm:text-sm">
                  YOUR REWARD: <span className="text-yellow-400">BNB: $56.90</span>
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Staking;