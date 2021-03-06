import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import { rootReducer } from "./rootReducer"
import { saveState } from "../functions/localStorage"

import { apiMiddleware } from "./middlewares/apiMiddleware/apiMiddleware"

// const persistedState = loadState()

const logger = createLogger()

export const store = createStore(
  rootReducer,
  // persistedState,
  applyMiddleware(apiMiddleware, logger)
)

const subscribe = () => {
  const { questions } = store.getState()
  saveState({ questions })
}

store.subscribe(subscribe)
