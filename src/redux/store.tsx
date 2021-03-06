import { createStore, applyMiddleware, Middleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./reducers";

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
