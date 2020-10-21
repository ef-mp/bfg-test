export const shiftItemDown = (arr, index) => {
  const tmpArray = [].concat(arr)
  const { length } = tmpArray
  if (index > length - 2) {
    const tmp = tmpArray[length - 1]
    tmpArray[length - 1] = tmpArray[0]
    tmpArray[0] = tmp
  } else {
    const tmp = arr[index]
    tmpArray[index] = arr[index + 1]
    tmpArray[index + 1] = tmp
  }
  return tmpArray
}

export const shiftItemUp = (arr, index) => {
  const item = arr[index]
  const tmpArray = [].concat(arr)
  if (index > 0) {
    tmpArray[index] = tmpArray[index - 1]
    tmpArray[index - 1] = item
  } else {
    tmpArray[index] = tmpArray[tmpArray.length - 1]
    tmpArray[arr.length - 1] = item
  }
  return tmpArray
}
