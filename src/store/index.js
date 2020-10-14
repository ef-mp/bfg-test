import { createStore, applyMiddleware } from "redux"
import { middlewares } from "./middlewares"
import { rootReducer } from "./rootReducer"

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
