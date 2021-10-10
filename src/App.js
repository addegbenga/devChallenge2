import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getWeatherByLocation,
  getCurrentLocationWeather,
} from "./actions/weatherAction";
import Landing from "./components/home/Landing";

function App() {
  const dispatch = useDispatch();
  const woeid = useSelector((state) => state.weather.weatherId.woeid);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((item) => {
        dispatch(
          getWeatherByLocation({
            lat: item.coords.latitude,
            long: item.coords.longitude,
          })
        );
      });
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCurrentLocationWeather(woeid));
  }, [dispatch, woeid]);
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
    </Switch>
  );
}

export default App;
