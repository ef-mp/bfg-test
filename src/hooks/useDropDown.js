import { useState } from "react"

const delay = 250
let timer = 0
let preventClick = false

export const useDropDown = () => {
  const [activeItem, setActiveItem] = useState(null)

  const dblClickHandler = () => {
    clearTimeout(timer)
    preventClick = true
  }

  const clickHandler = (index) => {
    timer = setTimeout(() => {
      if (!preventClick) {
        if (index === activeItem) {
          setActiveItem(null)
        } else {
          setActiveItem(index)
        }
      }
      preventClick = false
    }, delay)
  }

  const clickAwayHandler = () => {
    setActiveItem(null)
  }

  return [activeItem, clickHandler, clickAwayHandler, dblClickHandler]
}
