export const replaceItems = (arr, firstId, secId) => {
  const first = arr.findIndex((item) => item.questionId === firstId)
  const sec = arr.findIndex((item) => item.questionId === secId)
  const tmp = arr[first]
  arr[first] = arr[sec]
  arr[sec] = tmp
  return arr
}
