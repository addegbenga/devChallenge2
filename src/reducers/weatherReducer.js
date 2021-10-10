import {
  GET_WEATHER,
  GET_CURRENT_WEATHER,
  GET_SINGLE_WEATHER,
  GET_WEATHER_QUERY_RESULT,
  GET_WEATHER_BY_QUERY_RESULT,
  CLEAR_SEARCH_RESULT,
  IS_LOADING,
  GET_WEATHER_ERROR,
} from "../actions/types";

const initialState = {
  weatherId: {},
  searchResult: [],
  allweather: [],
  singleweather: null,
  loading: false,
  error: {},
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weatherId: action.payload[0],
        loading: false,
      };
    case GET_CURRENT_WEATHER:
      return {
        ...state,
        allweather: action.payload,
        loading: false,
      };
    case GET_SINGLE_WEATHER:
      return {
        ...state,
        singleweather: state.allweather.consolidated_weather.find(
          (item) => item.id === action.payload.id
        ),
        loading: false,
      };
    case GET_WEATHER_QUERY_RESULT: {
      return {
        ...state,
        searchResult:
          action.payload.length > 0
            ? action.payload
            : [
                {
                  title:
                    "no result found search with other keyword or go back to your current weather",
                },
              ],
        loading: false,
      };
    }
    case GET_WEATHER_BY_QUERY_RESULT: {
      return {
        ...state,
        weatherId: action.payload,
        loading: false,
      };
    }
    case CLEAR_SEARCH_RESULT:
      return {
        ...state,
        searchResult: [],
        loading: false,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
