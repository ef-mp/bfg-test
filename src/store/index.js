import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import { middlewares } from "./middlewares"
import { rootReducer } from "./rootReducer"
import { apiMiddleware } from "./middlewares/apiMiddleware/apiMiddleware"

const logger = createLogger()

export const store = createStore(
  rootReducer,
  applyMiddleware(apiMiddleware, logger)
)
