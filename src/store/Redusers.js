import ACTION_TYPES from "./actionTypes";

const initialState = {
  cards: [],
  error: null,
};

export default function cardsReducer(state = initialState, type, payload) {
  switch (type) {
    case ACTION_TYPES.GET_CONTACTS_SUCCESS:
      return { ...state, cards: payload };
    case ACTION_TYPES.GET_CONTACTS_REQUEST:
      return { ...state };
    case ACTION_TYPES.GET_CONTACTS_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
}
