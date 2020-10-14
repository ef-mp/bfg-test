import { QUESTIONS } from "./actions"
import { API_REQUEST, API_SUCCESS } from "../api/actions"

const initialState = {
  data: null,
}

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${QUESTIONS} ${API_SUCCESS}`:
      return {
        ...state,
        data: action.payload.data,
      }
    default:
      return state
  }
}
