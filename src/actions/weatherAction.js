import axios from "axios";
import {
  GET_WEATHER,
  GET_CURRENT_WEATHER,
  GET_WEATHER_QUERY_RESULT,
  IS_LOADING,
  GET_WEATHER_ERROR,
} from "../actions/types";

export const getWeatherByCurrentLocation = () => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
    });

    const response = await axios.get("https://extreme-ip-lookup.com/json/");
    console.log(response);
    const resp = await axios.get(
      `/giphy/location/search/?lattlong=${response.data.lat},${response.data.lon}`
    );

    dispatch({
      type: GET_WEATHER,
      payload: resp.data,
    });
  } catch (error) {
    dispatch({
      type: GET_WEATHER_ERROR,
      payload: error,
    });
  }
};

export const getCurrentLocationWeather = (woeid) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
    });

    const response = await axios.get(`/giphy/location/${woeid}/`);
    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_WEATHER_ERROR,
      payload: error,
    });
  }
};

export const getWeatherByQuery = (query) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
    });

    const response = await axios.get(`/giphy/location/search/?query=${query}`);
    dispatch({
      type: GET_WEATHER_QUERY_RESULT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_WEATHER_ERROR,
      payload: error,
    });
  }
};
