import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_SINGLE_WEATHER } from "../../actions/types";
import { WiCelsius, WiFahrenheit } from "react-icons/wi";
import { MdLocationOn, MdOutlineMyLocation } from "react-icons/md";
import { IoPaperPlane } from "react-icons/io5";
import dayjs from "dayjs";
// import calender from "dayjs/plugin/calendar";
import "./style.css";
import Sidebar from "../nav/Sidebar";
import Loading from "../../utils/Loading";

export default function Landing() {
  const dispatch = useDispatch();
  const weatherdata = useSelector(
    (state) => state.weather.allweather.consolidated_weather
  );
  const [openSidebar, setOpenSidebar] = useState(false);
  const singledata = useSelector((state) => state.weather.singleweather);
  const location = useSelector((state) => state.weather.allweather);
  const loading = useSelector((state) => state.weather.loading);

  // const mydate = (date) => {
  //   const d = new Date(date);
  //   return d;
  // };

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };
  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <>
      <Sidebar isOpen={openSidebar} closeSidebar={handleCloseSidebar} />
      <div className="bg-black md:flex ">
        {/* // start  mobile first screen */}
        <div className="search_home relative min-h-screen md:w-1/4 ">
          {!loading && weatherdata ? (
            <div>
              <div className="absolute  top-20">
                <img
                  className="mix-blend-screen opacity-5 "
                  src="/assets/Cloud-background.png"
                  alt=""
                />
              </div>

              <div className="flex justify-between items-center p-3 pt-3 md:pt-4 overflow-hidden">
                <button
                  onClick={handleOpenSidebar}
                  className="text-sm p-3 px-4 text"
                  style={{
                    background: "#6E707A",
                    fontWeight: 500,
                    color: " #E7E7EB",
                  }}
                >
                  Search for places{" "}
                </button>
                <div
                  style={{ background: "#6E707A" }}
                  className="p-2 rounded-full text-white shadow-lg"
                >
                  <MdOutlineMyLocation size={24} />
                </div>
              </div>

              <div
                style={{ marginTop: "3.7rem" }}
                className=" flex justify-center"
              >
                <img
                  className="w-28 "
                  src={`/assets/${
                    singledata
                      ? singledata.weather_state_abbr
                      : weatherdata && weatherdata[0].weather_state_abbr
                  }.png`}
                  alt="weather"
                />
              </div>
            </div>
          ) : null}

          {!loading ? (
            <div className="flex justify-center items-center mt-18 pb-16 flex-col">
              {singledata ? (
                <h1
                  style={{ fontSize: "144px", color: " #E7E7EB" }}
                  className=" flex items-center"
                >
                  {parseInt(singledata.max_temp)}
                  <WiCelsius
                    size={120}
                    className="-ml-9 mt-20 "
                    color="white"
                  />
                </h1>
              ) : (
                weatherdata && (
                  <h1
                    style={{ fontSize: "144px", color: " #E7E7EB" }}
                    className=" flex items-center"
                  >
                    {parseInt(weatherdata[0].max_temp)}
                    <WiCelsius
                      size={120}
                      className="-ml-9 mt-20 "
                      color="white"
                    />
                  </h1>
                )
              )}

              <h2
                style={{
                  fontSize: "36px",
                  color: " #A09FB1",
                  fontWeight: 600,
                }}
              >
                {singledata
                  ? singledata.weather_state_name
                  : weatherdata && weatherdata[0].weather_state_name}
              </h2>

              <div
                className="mt-4 flex"
                style={{
                  color: "#88869D",
                  fontWeight: 500,
                  fontSize: "18px",
                }}
              >
                {singledata ? (
                  <>
                    {/* <p>Today</p>
                    <span className="px-4">-</span> */}
                    <p>
                      {dayjs(singledata.applicable_date).format("ddd, D MMM")}
                    </p>
                  </>
                ) : (
                  weatherdata && (
                    <>
                      {/* <p>Today</p>
                      <span className="px-4">-</span> */}
                      <p>
                        {dayjs(weatherdata[0].applicable_date).format(
                          "ddd, D MMM"
                        )}
                      </p>
                    </>
                  )
                )}
              </div>

              {!loading && weatherdata ? (
                <div
                  style={{
                    color: "#88869D",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                  className="mt-8 flex items-center"
                >
                  <span className={`${loading && "absolute hidden"}`}>
                    {" "}
                    {!loading ? <MdLocationOn /> : null}
                  </span>
                  <p className="pl-1">{location.title}</p>
                </div>
              ) : null}
            </div>
          ) : (
            <Loading />
          )}
        </div>
        {/* // end  mobile first screen */}

        {/* // start of  mobile second screen */}

        <div
          style={{ background: "#100E1D" }}
          className="min-h-screen px-5 md:px-16  md:flex-1"
        >
          <div className="flex justify-end pt-4">
            <button
              style={{ background: "#E7E7EB" }}
              className=" rounded-full mr-2 flex items-center justify-center bg-gray-300"
            >
              <WiCelsius size={35} />
            </button>
            <button
              style={{ background: "#585676" }}
              className=" rounded-full flex items-center justify-center bg-gray-300"
            >
              <WiFahrenheit color="#E7E7EB" size={35} />
            </button>
          </div>
          <div className="grid select-none grid-cols-2 md:flex md:flex-wrap gap-3  pt-16">
            {!loading && weatherdata ? (
              weatherdata.slice(1).map((item, i) => (
                <div
                  onClick={() =>
                    dispatch({
                      type: GET_SINGLE_WEATHER,
                      payload: item,
                    })
                  }
                  key={i}
                  className="select-none flex bg-custom_bg-secondary flex-col  md:flex-grow border-white border-2   border-opacity-0 hover:border-opacity-10 transition duration-300 ease-in-out transform  items-center p-2 "
                >
                  <div className="flex select-none  flex-col items-center pt-1">
                    <h1 style={{ fontWeight: 500 }} className="text-white pb-1">
                      {dayjs(item.applicable_date).format("ddd, D MMM")}
                    </h1>

                    <img
                      className="w-16"
                      src={`/assets/${item.weather_state_abbr}.png`}
                      alt="shower"
                    />
                  </div>
                  <div className="flex select-none  justify-between items-center mt-4">
                    <h1
                      style={{ fontSize: "18px", color: " #E7E7EB" }}
                      className=" flex items-center"
                    >
                      {parseInt(item.max_temp)}
                      <WiCelsius
                        size={39}
                        className="-ml-3 pt-1 "
                        color="white"
                      />
                    </h1>
                    <h1
                      style={{ fontSize: "18px", color: " #A09FB1" }}
                      className=" ml-9 flex items-center"
                    >
                      {parseInt(item.min_temp)}
                      <WiCelsius size={39} className="-ml-3 pt-1 " />
                    </h1>
                  </div>
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
          {/* // end of  mobile second screen */}

          {/* // start of  mobile third screen */}
          <div className="mt-10">
            {singledata ? (
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#E7E7EB",
                }}
                className="text-white"
              >
                {dayjs(singledata.applicable_date).format('ddd, D MMM')}
                Highlights
              </h1>
            ) : (
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#E7E7EB",
                }}
                className="text-white"
              >
                Today's Highlights
              </h1>
            )}

            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* wind status */}
              <div
                className="flex flex-col items-center mt-8 p-3"
                style={{ background: "#1E213A", color: "#E7E7EB" }}
              >
                <h2 style={{ fontWeight: 500 }}>Wind status</h2>
                <div className="flex items-center mb-1">
                  <h1 style={{ fontSize: "64px", fontWeight: 700 }}>
                    {" "}
                    {singledata
                      ? parseInt(singledata.wind_speed)
                      : weatherdata && parseInt(weatherdata[0].wind_speed)}
                  </h1>
                  <h1 style={{ fontWeight: 600 }} className="text-xl">
                    mph
                  </h1>
                </div>
                <div className="flex items-center">
                  <div
                    style={{
                      background: "rgba(255, 255, 255,0.3)",
                      transform: `rotate(${
                        singledata
                          ? parseInt(singledata.wind_direction)
                          : weatherdata &&
                            parseInt(weatherdata[0].wind_direction)
                      }deg)`,
                    }}
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
                  <h1 style={{ fontSize: "64px", fontWeight: 700 }}>
                    {" "}
                    {singledata
                      ? parseInt(singledata.humidity)
                      : weatherdata && parseInt(weatherdata[0].humidity)}
                  </h1>
                  <h1 style={{ fontWeight: 600 }} className="text-xl mt-4">
                    %
                  </h1>
                </div>
                <div className="w-full h-1.5 bg-white mt-3 rounded-full mb-3">
                  <div
                    style={{
                      width: `${
                        singledata
                          ? parseInt(singledata.humidity)
                          : weatherdata && parseInt(weatherdata[0].humidity)
                      }%`,
                    }}
                    className="h-1.5 bg-yellow-300 rounded-l-full "
                  ></div>
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
                  <h1 style={{ fontSize: "64px", fontWeight: 700 }}>
                    {singledata
                      ? parseInt(singledata.visibility)
                      : weatherdata && parseInt(weatherdata[0].visibility)}
                  </h1>
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
                  <h1 style={{ fontSize: "64px", fontWeight: 700 }}>
                    {" "}
                    {singledata
                      ? parseInt(singledata.air_pressure)
                      : weatherdata && parseInt(weatherdata[0].air_pressure)}
                  </h1>
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
    </>
  );
}
