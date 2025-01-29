import React from "react";
import home_main_img from "../../assets/home_main_img.png";
import arrow_right from "../../assets/arrow_right.png";
import dolar from "../../assets/dolar.png";
import lightning_img from "../../assets/lightning_img.png";
import lightning_img_blue from "../../assets/lightning_img_blue.png";
import btn_tap from "../../assets/btn_tab.png";
import Header from "../layouts/Header";
import FooterNav from "../layouts/FooterNav";

const Home = () => {
  const value = 50;
  return (
    <div className="z-40 h-screen pt-20 pb-24 text-white flex flex-col justify-between items-center py-2 min-w-[320px] max-w-full">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="absolute w-full flex justify-center items-center top-[115px] sm:top-[115px]">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#181f32] border border-blue-700 flex flex-col items-center justify-center">
            <p className="text-lg sm:text-2xl font-bold text-white">01</p>
            <p className="text-[10px] sm:text-xs text-white">level</p>
          </div>
        </div>
        <div className="flex justify-between bg-[#1D1D20] rounded-xl border border-gray-700 p-2 mb-3 w-[90%] sm:w-3/4">
          <div className="text-left">
            <div className="flex">
              <p className="text-[10px] sm:text-xs text-gray-400">Daily Limit</p>
              <img src={arrow_right} className="w-3 sm:w-4" />
            </div>
            <div className="flex pt-2">
              <div className="flex items-center">
                <img
                  src={lightning_img_blue}
                  className="px-1 py-1 border border-gray-700 rounded-lg w-5 sm:w-6"
                />
              </div>
              <div className="flex items-center pl-2">
                <p className="text-lg sm:text-xl font-bold text-white">140.4k</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="flex font-bold text-lg sm:text-2xl text-yellow-400 mt-1 items-center">
              2001 <img className="h-4 sm:h-6" src={dolar} />
            </p>
            <p className="text-[10px] sm:text-sm text-gray-400">Balance</p>
          </div>
        </div>
      </div>

      {/* Image and Button */}
      <div>
        <div className="h-full flex flex-col justify-center items-center">
          <div className="relative">
            <img
              src={home_main_img}
              alt="Character"
              className="w-92 h-92 sm:w-80 sm:h-80"
            />
          </div>
          <button className="gap-1 flex items-center px-4 py-1 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 text-sm sm:px-6 sm:py-1.5 sm:text-base">
            <img src={btn_tap} className="w-4 sm:w-5" />
            <p>Tap Me</p>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-[90%] px-2 py-1 sm:w-3/4">
        <div className="w-full bg-gray-600 h-1.5 sm:h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <div className="flex justify-start text-[10px] sm:text-sm mt-2">
          <img src={lightning_img} className="w-3 sm:w-4" />
          <p>4900/5000</p>
        </div>
      </div>
    </div>
  );
};

export default Home;