import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

export const DropDown = (props) => {
  const { head, content, show, onClick } = props

  const [styles, setStyles] = useState({ maxHeight: "" })
  const rootRef = useRef()
  const contentRef = useRef()

  const clickHandler = () => {
    onClick()
  }

  useEffect(() => {
    const contentHeight = contentRef.current.clientHeight
    setStyles({ maxHeight: show ? `${contentHeight}px` : "" })
  }, [show])

  return (
    <div className="drop-down" ref={rootRef}>
      <div onClick={clickHandler} className="drop-down__header">
        {head}
      </div>
      <div style={styles} className="drop-down__wrapper">
        <div
          ref={contentRef}
          className={`drop-down__content ${
            show ? "drop-down__content_open" : ""
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  )
}

DropDown.propTypes = {
  head: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
