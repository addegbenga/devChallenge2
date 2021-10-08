import React from "react";
import bg from "../../assets/Cloud-background.png";
import shower from "../../assets/Shower.png";
import { WiCelsius } from "react-icons/wi";
import { MdLocationOn, MdOutlineMyLocation } from "react-icons/md";
import { IoPaperPlane } from "react-icons/io5";
import "./style.css";

const data = [
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
];
export default function Landing() {
  return (
    <div className="bg-black md:flex ">
      {/* // start  mobile first screen */}
      <div className="search_home relative min-h-screen md:w-1/4 ">
        <div className="absolute  top-20">
          <img className="mix-blend-screen opacity-5 " src={bg} alt="" />
        </div>

        <div className="flex justify-between items-center p-2 pt-2 md:pt-4 overflow-hidden">
          <input
            style={{ background: "#6E707A", fontWeight: 500 }}
            className="p-1.5 pl-3 md:w-1/2 text-sm placeholder-white  "
            type="search"
            placeholder="Search for places"
          />
          <div
            style={{ background: "#6E707A" }}
            className="p-2 rounded-full text-white shadow-lg"
          >
            <MdOutlineMyLocation size={18} />
          </div>
        </div>
        <div className="mt-28 flex justify-center">
          <img className="w-28" src={shower} alt="weather" />
        </div>
        <div className="flex justify-center items-center mt-18 pb-16 flex-col">
          <h1
            style={{ fontSize: "144px", color: " #E7E7EB" }}
            className=" flex items-center"
          >
            15
            <WiCelsius size={120} className="-ml-9 mt-20 " color="white" />
          </h1>

          <h2
            style={{ fontSize: "36px", color: " #A09FB1", fontWeight: 600 }}
            className=""
          >
            Shower
          </h2>
          <div
            className="mt-10 flex"
            style={{ color: "#88869D", fontWeight: 500, fontSize: "18px" }}
          >
            <p>Today</p>
            <span className="px-4">-</span>
            <p>Fri, 5 jun</p>
          </div>
          <div
            style={{ color: "#88869D", fontSize: "18px", fontWeight: "600" }}
            className="mt-8 flex items-center"
          >
            <MdLocationOn />
            <p className="pl-1">Helsinki</p>
          </div>
        </div>
      </div>
      {/* // end  mobile first screen */}

      {/* // start of  mobile second screen */}

      <div
        style={{ background: "#100E1D" }}
        className="min-h-screen px-5 md:px-20  md:flex-1"
      >
          <div>
              <span>C</span>
              <span>C</span>
          </div>
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3  pt-16">
          {data.map((item, i) => (
            <div
              style={{ background: "#1E213A" }}
              key={i}
              className=" flex flex-col md:flex-grow  items-center p-2"
            >
              <div className="flex flex-col items-center pt-1">
                <h1 style={{ fontWeight: 500 }} className="text-white pb-1">
                  Tommorrow
                </h1>
                <img className="w-16" src={shower} alt="shower" />
              </div>
              <div className="flex justify-between items-center mt-4">
                <h1
                  style={{ fontSize: "18px", color: " #E7E7EB" }}
                  className=" flex items-center"
                >
                  15
                  <WiCelsius size={39} className="-ml-3 pt-1 " color="white" />
                </h1>
                <h1
                  style={{ fontSize: "18px", color: " #A09FB1" }}
                  className=" ml-9 flex items-center"
                >
                  11
                  <WiCelsius size={39} className="-ml-3 pt-1 " />
                </h1>
              </div>
            </div>
          ))}
        </div>
        {/* // end of  mobile second screen */}

        {/* // start of  mobile third screen */}
        <div className="mt-10">
          <h1
            style={{ fontSize: "28px", fontWeight: "bold", color: "#E7E7EB" }}
            className="text-white"
          >
            Today's Highlights
          </h1>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            {/* wind status */}
            <div
              className="flex flex-col items-center mt-8 p-3"
              style={{ background: "#1E213A", color: "#E7E7EB" }}
            >
              <h2 style={{ fontWeight: 500 }}>Wind status</h2>
              <div className="flex items-center mb-1">
                <h1 style={{ fontSize: "64px", fontWeight: 700 }}>7</h1>
                <h1 style={{ fontWeight: 600 }} className="text-xl">
                  mph
                </h1>
              </div>
              <div className="flex items-center">
                <div
                  style={{ background: "rgba(255, 255, 255,0.3)" }}
                  className="p-1 rounded-full"
                >
                  <IoPaperPlane size={10} color="#E7E7EB" />
                </div>
                <p style={{ fontWeight: 500 }} className="ml-2 text-xs">
                  WSW
                </p>
              </div>
            </div>
            {/* wind status */}

            {/* humidity */}
            <div
              className="flex flex-col items-center mt-8  p-3 px-8"
              style={{ background: "#1E213A", color: "#E7E7EB" }}
            >
              <h2 style={{ fontWeight: 500 }}>Humidity</h2>
              <div className="flex items-center mb-1">
                <h1 style={{ fontSize: "64px", fontWeight: 700 }}>84</h1>
                <h1 style={{ fontWeight: 600 }} className="text-xl mt-4">
                  %
                </h1>
              </div>
              <div className="w-full h-1.5 bg-white mt-3 rounded-full mb-3">
                <div className="w-1/2 h-1.5 bg-yellow-300 rounded-l-full "></div>
                <div className="flex justify-between text-sm ">
                  <h1 className="-mt-6 ">0</h1>
                  <h1 className="-mt-6 ">50</h1>
                  <h1 className="-mt-6 ">100</h1>
                </div>
              </div>
            </div>
            {/* humidity */}

            {/* visibility */}
            <div
              className="flex flex-col items-center mt-8 md:mt-0 p-3"
              style={{ background: "#1E213A", color: "#E7E7EB" }}
            >
              <h2 style={{ fontWeight: 500 }}>Visibility</h2>
              <div className="flex items-center mb-1">
                <h1 style={{ fontSize: "64px", fontWeight: 700 }}>6,4</h1>
                <h1 style={{ fontWeight: 600 }} className="text-xl mt-5 ml-2">
                  miles
                </h1>
              </div>
            </div>
            {/* visibility */}

            {/* air pressure */}
            <div
              className="flex flex-col items-center mt-8 md:mt-0 p-3"
              style={{ background: "#1E213A", color: "#E7E7EB" }}
            >
              <h2 style={{ fontWeight: 500 }}>Air pressure</h2>
              <div className="flex items-center mb-1">
                <h1 style={{ fontSize: "64px", fontWeight: 700 }}>998</h1>
                <h1 style={{ fontWeight: 600 }} className="text-xl mt-5 ml-3">
                  mb
                </h1>
              </div>
            </div>
            {/* air pressure */}
          </div>
        </div>
        <div
          style={{ background: "#100E1D", color: "#E7E7EB", fontWeight: 500 }}
          className="pt-20 flex justify-center pb-3 "
        >
          <p className="text-sm">
            created by <span className="font-bold">adeyemi</span> -
            devChallenges.io
          </p>
        </div>
      </div>
      {/* // end of  mobile third screen */}
    </div>
  );
}
