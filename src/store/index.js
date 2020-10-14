import { createStore, applyMiddleware } from "redux"
import { middlewares } from "./middlewares"
import { rootReducer } from "./rootReducer"
import { apiMiddleware } from "./middlewares/apiMiddleware/apiMiddleware"

export const store = createStore(rootReducer, applyMiddleware(apiMiddleware))
