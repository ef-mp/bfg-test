import {
  QUESTIONS,
  QUESTIONS_DECREMENT_SCORE,
  QUESTIONS_INCREMENT_SCORE,
  QUESTIONS_REPLACE,
  QUESTIONS_SHIFT_DOWN,
  QUESTIONS_SHIFT_UP,
} from "./actions"
import { API_FETCHING, API_SUCCESS } from "../api/actions"
import {
  changeRating,
  replaceItems,
} from "../../../functions/reducersFunctions/changeRating"
import {
  shiftItemDown,
  shiftItemUp,
} from "../../../functions/reducersFunctions/shiftListItesm"

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

    case QUESTIONS_REPLACE:
      return {
        ...state,
        data: replaceItems(
          state.data,
          action.payload.data.firstId,
          action.payload.data.secondId
        ),
      }

    case QUESTIONS_SHIFT_UP:
      return {
        ...state,
        data: shiftItemUp(state.data, action.payload.data),
      }

    case QUESTIONS_SHIFT_DOWN:
      return {
        ...state,
        data: shiftItemDown(state.data, action.payload.data),
      }

    default:
      return state
  }
}
