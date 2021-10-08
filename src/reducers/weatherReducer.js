import { GET_WEATHER } from "../actions/types";

const initialState = {
  weathers: [],
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weathers: action.payload,
      };

    default:
      return state;
  }
};
