import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

export const DropDown = (props) => {
  const { head, content, show, onDoubleClick, onClick, onShiftKeyDown } = props

  const [styles, setStyles] = useState({ maxHeight: "" })
  const rootRef = useRef()
  const contentRef = useRef()

  useEffect(() => {
    const contentHeight = contentRef.current.clientHeight
    setStyles({ maxHeight: show ? `${contentHeight}px` : "" })
  }, [show])

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      onClick()
    }
    onShiftKeyDown(e)
  }

  return (
    <div
      onDoubleClick={onDoubleClick}
      onClick={onClick}
      onKeyDown={keyDownHandler}
      className="drop-down"
      role="button"
      tabIndex={0}
      ref={rootRef}
    >
      <div className="drop-down__header">{head}</div>
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
  onDoubleClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onShiftKeyDown: PropTypes.func.isRequired,
}
