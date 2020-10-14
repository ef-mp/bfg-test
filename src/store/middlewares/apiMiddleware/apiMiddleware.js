import {
  API_REQUEST,
  apiError,
  apiSuccess,
  apiFetching,
} from "../../modules/api/actions"

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action)

  // если в action.type есть API_REQUEST, то делается запрос переданным методом
  if (action.type.includes(API_REQUEST)) {
    const {
      apiMethod, // функция запроса из API
      entity, // имя сущности, например [user], [cart] и т.д.
    } = action.payload.meta

    const { data } = action.payload // body запроса
    dispatch(apiFetching(entity, true)) // запрос начался

    apiMethod(data)
      .then((response) => {
        // запрос успешно завёршен, тут пердача данных в reducer
        dispatch(apiSuccess(response.data, entity))
        // используется для отображения состояния "loading"
        dispatch(apiFetching(entity, false))
      })
      .catch((e) => {
        dispatch(apiFetching(entity, false))
        dispatch(apiError(e, entity))
      })
  }
}
