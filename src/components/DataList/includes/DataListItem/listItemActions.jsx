import React from "react"
import IconButton from "@material-ui/core/IconButton"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import PropTypes from "prop-types"

export const ListItemActions = (props) => {
  const { onIncrement, onDecrement } = props
  const incrementClickHandler = (e) => {
    e.stopPropagation()
    onIncrement()
  }

  const decrementClickHandler = (e) => {
    e.stopPropagation()
    onDecrement()
  }

  const incrementKeyDownHandler = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowRight") onIncrement()
  }

  const decrementKeyDownHandler = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowLeft") onDecrement()
  }

  return (
    <ListItemSecondaryAction>
      <IconButton
        className="data-list-item__button"
        onClick={incrementClickHandler}
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
