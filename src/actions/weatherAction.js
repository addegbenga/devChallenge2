import axios from "axios";
import {
  GET_WEATHER,
  GET_CURRENT_WEATHER,
  GET_WEATHER_QUERY_RESULT,
  IS_LOADING,
  GET_WEATHER_ERROR,
} from "../actions/types";


export const getWeatherByLocation = (body) => async (dispatch) => {
  try {
    // const response = await axios.get(`api/location/search/?query=${body}`);
    dispatch({
      type: IS_LOADING,
    });

    const response = await axios.get(
      `api/location/search/?lattlong=${body.lat},${body.long}`
    );
    // /api/location/search/?lattlong=36.96,-122.02
    dispatch({
      type: GET_WEATHER,
      payload: response.data,
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

    const response = await axios.get(`api/location/${woeid}/`);
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

    const response = await axios.get(`/api/location/search/?query=${query}`);
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
