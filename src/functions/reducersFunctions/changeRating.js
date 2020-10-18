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
