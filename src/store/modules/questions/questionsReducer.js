import {
  QUESTIONS,
  QUESTIONS_DECREMENT_SCORE,
  QUESTIONS_INCREMENT_SCORE,
} from "./actions"
import { API_FETCHING, API_SUCCESS } from "../api/actions"
import { changeRating } from "../../../functions/reducersFunctions/changeRating"

const initialState = {
  loading: false,
  error: false,
  data: [],
}

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${QUESTIONS} ${API_SUCCESS}`:
      return {
        ...state,
        data: action.payload.data,
      }

    case QUESTIONS_INCREMENT_SCORE:
      return changeRating(state, "data", action, 1)

    case QUESTIONS_DECREMENT_SCORE:
      return changeRating(state, "data", action, -1)

    case `${QUESTIONS} ${API_FETCHING}`:
      return {
        ...state,
        loading: action.payload.data,
      }

    default:
      return state
  }
}
