import { api } from "../../../api"

export const QUESTIONS = "[questions]"

export const QUESTIONS_API_REQUEST = `${QUESTIONS} API_REQUEST`
export const fetchQuestions = () => ({
  type: QUESTIONS_API_REQUEST,
  payload: {
    meta: {
      entity: QUESTIONS,
      apiMethod: api.fetchQuestions,
    },
  },
})
