import ACTION_TYPES from "./actionTypes";

export const getCardsAction = (payload) => {
  return {
    type: ACTION_TYPES.GET_CARDS_ACTION,
    payload,
  };
};

export const getCardsRequest = () => {
  return {
    type: ACTION_TYPES.GET_CARDS_REQUEST,
  };
};

export const getCardsSuccess = (payload) => {
  return {
    type: ACTION_TYPES.GET_CARDS_SUCCESS,
    payload,
  };
};

export const getCardsError = (payload) => {
  return {
    type: ACTION_TYPES.GET_CARDS_ERROR,
    payload,
  };
};
