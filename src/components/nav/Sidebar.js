import React, { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineRight } from "react-icons/ai";
import { getWeatherByQuery } from "../../actions/weatherAction";
import { Dialog } from "@headlessui/react";
import "./style.css";
import {
  GET_WEATHER_BY_QUERY_RESULT,
  CLEAR_SEARCH_RESULT,
} from "../../actions/types";

export default function Sidebar({ isOpen, closeSidebar }) {
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.weather.searchResult);
  const [searchValue, setSearchValue] = useState({
    location: "",
  });
  const loading = useSelector((state) => state.weather.loading);

  const handleChange = (e) => {
    setSearchValue({ ...searchValue, [e.target.name]: e.target.value });
  };

  const handleSearchQuery = (e) => {
    e.preventDefault();
    dispatch(getWeatherByQuery(searchValue.location));
  };

  const handleQueryResult = (item) => {
    dispatch({
      type: GET_WEATHER_BY_QUERY_RESULT,
      payload: item,
    });
    closeSidebar();
  };

  const handleCloseSideBar = () => {
    closeSidebar();
    dispatch({
      type: CLEAR_SEARCH_RESULT,
    });
    setSearchValue({
      location: "",
    });
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed w-full md:w-1/4 inset-0 z-10 overflow-y-auto"
          onClose={handleCloseSideBar}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div
            style={{ background: " #1E213A" }}
            className="min-h-screen bg-green-200 px-4 text-center"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block  overflow-hidden w-full min-h-screen text-left align-middle transition-all transform shadow-xl ">
                <div className="flex justify-end my-3 mb-6">
                  <button onClick={handleCloseSideBar}>
                    <FaTimes color="#E7E7EB" size={22} />
                  </button>
                </div>
                <form onSubmit={handleSearchQuery}>
                  <div className="flex w-full ">
                    <div className="relative flex flex-1">
                      <input
                        placeholder="search location"
                        type="search"
                        required
                        autoComplete="true"
                        value={searchValue.location}
                        name="location"
                        onChange={(e) => handleChange(e)}
                        className="border text-white text-sm w-full bg-transparent placeholder-gray-500  border-indigo-100   focus:border-indigo-300  focus:text-gray-600 focus:outline-none  p-2 pl-7  md:pl-8 "
                      />
                      <div className="absolute text-gray-500  left-2 top-2.5 md:top-2.5">
                        <AiOutlineSearch />
                      </div>
                    </div>
                    <button
                      style={{
                        background: "#3C47E9",
                        fontWeight: 500,
                        color: "#E7E7EB",
                      }}
                      className=" text-sm px-3 ml-1"
                    >
                      {loading ? <span>loading</span> : <span> search</span>}
                    </button>
                  </div>
                </form>
                <div style={{ color: "#E7E7EB" }} className="mt-10">
                  {searchResult &&
                    searchResult.map((item, i) => (
                      <div
                        onClick={() => handleQueryResult(item)}
                        key={i}
                        className="border  transition duration-500 ease-in-out  border-custom_border-hover searched_location border-opacity-0 hover:border-opacity-100 p-2 mb-6  md:cursor-pointer flex justify-between items-center"
                      >
                        <h2>{item.title}</h2>
                        <span className="hide">
                          <AiOutlineRight color="#616475" />
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
