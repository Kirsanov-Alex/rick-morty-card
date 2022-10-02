import { createStore, applyMiddleware } from "redux";
import cardsReducer from "./Redusers";
import createSagaMiddleware from "redux-saga";
import fetchCards from '../saga/cardsSaga'

const sagaMiddleware = createSagaMiddleware();

const middleWare = applyMiddleware(sagaMiddleware);

export default createStore(cardsReducer, middleWare);
sagaMiddleware.run(fetchCards)
