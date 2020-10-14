export const API_REQUEST = "API_REQUEST"
export const API_SUCCESS = "API_SUCCESS"
export const API_ERROR = "API_ERROR"
export const API_FETCHING = "API_FETCHING"

// пример actionCreator для использорания API
export const apiRequest = (body, apiMethod, entity) => ({
  type: `${entity} ${API_REQUEST}`,
  payload: {
    data: body,
    meta: {
      apiMethod,
      entity,
    },
  },
})

export const apiFetching = (entity, isFetching) => ({
  type: `${entity} ${API_FETCHING}`,
  payload: {
    data: isFetching,
  },
})

export const apiSuccess = (response, entity) => ({
  type: `${entity} ${API_SUCCESS}`,
  payload: {
    data: response.data,
    meta: { entity },
  },
})

export const apiError = (error, entity) => ({
  type: `${entity} ${API_ERROR}`,
  payload: {
    data: error,
    meta: { entity },
  },
})
