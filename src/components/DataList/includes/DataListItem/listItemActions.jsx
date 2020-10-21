import React, { useCallback } from "react"
import IconButton from "@material-ui/core/IconButton"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import PropTypes from "prop-types"

export const ListItemActions = (props) => {
  const { onIncrement, onDecrement } = props

  const incrementClickHandler = useCallback(
    (e) => {
      e.stopPropagation()
      onIncrement()
    },
    [onIncrement]
  )

  const decrementClickHandler = useCallback(
    (e) => {
      e.stopPropagation()
      onDecrement()
    },
    [onDecrement]
  )

  const incrementKeyDownHandler = useCallback(
    (e) => {
      e.stopPropagation()
      if (e.key === "ArrowUp" || e.key === "ArrowRight") onIncrement()
    },
    [onIncrement]
  )

  const decrementKeyDownHandler = useCallback(
    (e) => {
      e.stopPropagation()
      if (e.key === "ArrowDown" || e.key === "ArrowLeft") onDecrement()
    },
    [onDecrement]
  )

  return (
    <ListItemSecondaryAction>
      <IconButton
        className="data-list-item__button"
        onClick={incrementClickHandler}
        onDoubleClick={(e) => e.stopPropagation()}
        onKeyDown={incrementKeyDownHandler}
        edge="end"
        size="small"
        aria-label="increment"
      >
        <ExpandLess />
      </IconButton>
      <IconButton
        className="data-list-item__button"
        onClick={decrementClickHandler}
        onDoubleClick={(e) => e.stopPropagation()}
        onKeyDown={decrementKeyDownHandler}
        edge="end"
        size="small"
        aria-label="decrement"
      >
        <ExpandMore />
      </IconButton>
    </ListItemSecondaryAction>
  )
}

ListItemActions.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}
