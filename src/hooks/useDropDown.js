import { useState } from "react"

export const useDropDown = () => {
  const [activeItem, setActiveItem] = useState(null)

  const clickHandler = (index) => {
    if (index === activeItem) {
      setActiveItem(null)
    } else {
      setActiveItem(index)
    }
  }

  const clickAwayHandler = () => {
    setActiveItem(null)
  }

  return [activeItem, clickHandler, clickAwayHandler]
}
