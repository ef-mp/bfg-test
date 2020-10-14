import { combineReducers } from "redux"
import { questionsReducer } from "./modules/questions/questionsReducer"

export const rootReducer = combineReducers({
  questions: questionsReducer,
})
