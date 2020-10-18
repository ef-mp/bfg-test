export const changeRating = (state, key, action, amount) => ({
  ...state,
  [key]: state[key]
    .slice(0, action.payload.itemIndex)
    .concat({
      ...state[key][action.payload.itemIndex],
      score: state[key][action.payload.itemIndex].score + amount,
    })
    .concat(state[key].slice(action.payload.itemIndex + 1)),
})

export const replaceItems = (arr, firstId, secId) => {
  const first = arr.findIndex((item) => item.questionId === firstId)
  const sec = arr.findIndex((item) => item.questionId === secId)
  const tmp = arr[first]
  arr[first] = arr[sec]
  arr[sec] = tmp
  return arr
}
