import { api } from "../../../api"
import { API_REQUEST } from "../api/actions"
import { transformQuestions } from "../../../functions/transformers"

export const QUESTIONS = "[questions]"

export const QUESTIONS_API_REQUEST = `${QUESTIONS} ${API_REQUEST}`
export const fetchQuestions = ({
  fromDate = 1514764800000,
  order = "desc",
  sort = "votes",
  query = "react-redux",
}) => ({
  type: QUESTIONS_API_REQUEST,
  payload: {
    data: { fromDate, order, sort, query },
    meta: {
      entity: QUESTIONS,
      apiMethod: api.fetchQuestions,
      dataTransformer: transformQuestions,
    },
  },
})

export const QUESTIONS_INCREMENT_SCORE = `${QUESTIONS} INCREMENT SCORE`
export const questionsIncrementScore = (itemIndex) => ({
  type: QUESTIONS_INCREMENT_SCORE,
  payload: { itemIndex },
})

export const QUESTIONS_DECREMENT_SCORE = `${QUESTIONS} DECREMENT SCORE`
export const questionsDecrementScore = (itemIndex) => ({
  type: QUESTIONS_DECREMENT_SCORE,
  payload: { itemIndex },
})

export const QUESTIONS_REPLACE = `${QUESTIONS} REPLACE`
export const replaceQuestions = ({ firstId, secondId }) => ({
  type: QUESTIONS_REPLACE,
  payload: {
    data: {
      firstId,
      secondId,
    },
  },
})

export const QUESTIONS_SHIFT_UP = `${QUESTIONS} SHIFT_UP`
export const questionsShiftUp = (index) => ({
  type: QUESTIONS_SHIFT_UP,
  payload: {
    data: index,
  },
})

export const QUESTIONS_SHIFT_DOWN = `${QUESTIONS} SHIFT_DOWN`
export const questionsShiftDown = (index) => ({
  type: QUESTIONS_SHIFT_DOWN,
  payload: {
    data: index,
  },
})
