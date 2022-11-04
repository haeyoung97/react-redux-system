import { applyMiddleware, combineReducers, compose, createStore } from "redux";
/**
 * @description redux-thunk
 * 리덕스를 사용하는 어플리케이션에서 비동기 작업을 처리 할 때 가장 기본적인 방법
 */
import thunkMiddleware from "redux-thunk";
/**
 * @description redux-persist
 * redux 의 store 는 페이지를 새로고침 할 경우 state 가 날아가는 것을 보실 수 있습니다.
 * 이것에 대한 대응 방안으로 localStorage 또는 session 에 저장하고자 하는 reducer state 를 저장하여,
 * 새로고침 하여도 저장공간에 있는 데이터를 redux 에 불러오는 형식으로 이루어집니다.
 */
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { sessionReducer } from "./reducer/eSESSION";

export const reducer = combineReducers({
  eSESSION: sessionReducer,
});

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
/**
 * @description default Enhancers
 * @type {*|null}
 */
const devTools =
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null;

const composeEnhancers = devTools || compose;
const composedEnhancers = composeEnhancers(middlewareEnhancer);

const persistConfig = {
  key: "data",
  storage,
  whitelist: ["data"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const appReducer = combineReducers({
  data: persistedReducer,
});

export const store = createStore(appReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
