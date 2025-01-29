import React from "react";
import dolar from "../../assets/dolar.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import episode1_all from "../../assets/episode1_all.png";
import episode2_all from "../../assets/episode2_all.png";
import Header from "../layouts/Header";
import FooterNav from "../layouts/FooterNav";

const Minting = () => {
  return (
    <div className="h-screen  pt-16   text-white flex flex-col justify-between items-center px-3 sm:px-4  min-w-[320px] max-w-full">
      <main className="p-3 sm:p-4 space-y-4 w-full">
        
        {/* Balance and Token Info */}
        <section className="bg-gray-800 p-3 sm:p-4 rounded-2xl border border-gray-700 space-y-3">
          <div className="flex  justify-between items-center text-center sm:text-left">
            <div>
              <p className="flex font-bold text-lg sm:text-2xl text-yellow-400 mt-2 items-center">
                <img className="h-6 sm:h-full" src={dolar} /> &nbsp;2001
              </p>
              <p className="text-xs sm:text-sm text-gray-400">Current Balance</p>
            </div>
            <div>
              <p className="flex font-bold text-lg sm:text-2xl text-yellow-400 mt-2 items-center">
                <img className="h-6 sm:h-full" src={dolar} /> &nbsp; $2001
              </p>
              <p className="text-xs sm:text-sm text-gray-400">BEP20 Token</p>
            </div>
            <div className="mt-3 sm:mt-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#181f32] border border-blue-700 flex flex-col items-center justify-center">
                <p className="text-lg sm:text-2xl font-bold text-white">01</p>
                <p className="text-xs text-gray-400">Level</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Minting Section */}
        <section className="bg-gray-800 pb-5 border border-gray-700 rounded-2xl space-y-3 px-3 sm:px-4">
          <div className="flex justify-center">
            <div className="rounded-b-3xl bg-[#181f32] border border-blue-700 py-1 px-6 sm:px-12 text-center">
              <h2 className="text-blue-700 font-bold text-xs sm:text-sm">
                CURRENT MINTING
              </h2>
            </div>
          </div>

          {[
            { img: avatar1, title: "EPISODES 01", desc: "CITY ON HIGH ALERT" },
            { img: avatar2, title: "EPISODES 02", desc: "CITY ON HIGH ALERT" },
          ].map((item, index) => (
            <div key={index} className="flex  justify-between border-b border-gray-700 p-3 sm:p-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-blue-500 flex items-center justify-center rounded-md p-2">
                  <img className="w-8 sm:w-10" src={item.img} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-white text-sm sm:text-xl">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-blue-400">{item.desc}</p>
                </div>
              </div>
              <div className="flex flex-col items-end mt-2 sm:mt-0">
                <span className="font-bold text-yellow-400 text-xs sm:text-sm">BNB: %56.90</span>
                <span className="font-bold text-blue-400 text-base sm:text-xl">QTY: 20</span>
              </div>
            </div>
          ))}
        </section>

        {/* Minting Cards Section */}
        <section className="pb-16 rounded-2xl space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {[episode1_all, episode2_all].map((img, index) => (
              <div key={index} className="overflow-hidden shadow-lg w-full sm:w-60">
                {/* Image Section */}
                <div className="flex justify-center items-center w-full">
                  <img src={img} alt="Episode Character" className="w-full object-contain" />
                </div>
                {/* Content Section */}
                <div className="pb-4 pt-2 px-3 bg-gray-800 rounded-b-3xl flex justify-between items-center">
                  <div className="text-left">
                    <h3 className="text-white font-bold text-sm sm:text-lg">EPISODE 0{index + 1}</h3>
                    <p className="text-yellow-400 text-xs sm:text-sm">BNB: $56.90</p>
                  </div>
                  {/* Button */}
                  <button className="h-8 px-3 sm:px-4 bg-blue-500 text-white text-xs sm:text-sm rounded-md hover:bg-blue-600">
                    MINT NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Minting;