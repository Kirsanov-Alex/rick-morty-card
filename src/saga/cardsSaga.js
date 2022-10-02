import { put, call } from "redux-saga/effects";
import { getCardsAction, getCardsError } from "../store/Actions";

const fetchCardsFromApi = () =>
  fetch("https://rickandmortyapi.com/api/character");

export default function* fetchCards() {
  try {
    const data = yield call(fetchCardsFromApi);
    const json = yield call(() => new Promise((res) => res(data.json())));
    yield put(getCardsAction(json));
  } catch (error) {
    yield put(getCardsError(error));
  }
}
