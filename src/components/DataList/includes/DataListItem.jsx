import React from "react"
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core"
import PropTypes from "prop-types"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import IconButton from "@material-ui/core/IconButton"
import Box from "@material-ui/core/Box"

export const DataListItem = (props) => {
  const {
    image,
    title,
    score,
    onIncrementClick,
    onDecrementClick,
    highlight,
    ...other
  } = props

  const incrementKeyDownHandler = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowRight") onIncrementClick()
  }

  const decrementKeyDownHandler = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowLeft") onDecrementClick()
  }

  const keyDownHandler = (e) => {
    decrementKeyDownHandler(e)
    incrementKeyDownHandler(e)
  }

  const incrementClickHandler = (e) => {
    e.stopPropagation()
    onIncrementClick()
  }

  const decrementClickHandler = (e) => {
    e.stopPropagation()
    onDecrementClick()
  }

  return (
    <Box borderLeft={4} borderColor={highlight ? "success.main" : ""}>
      <ListItem
        onKeyDown={keyDownHandler}
        classes={{ root: "data-list-item__root" }}
        button
        {...other}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image} />
        </ListItemAvatar>

        <ListItemText>
          <Typography className="data-list__title">{title}</Typography>
        </ListItemText>

        <Box ml={3}>
          <Typography align="center" color="textPrimary" variant="button">
            {score}
          </Typography>
        </Box>

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
      </ListItem>
    </Box>
  )
}

DataListItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
  highlight: PropTypes.bool,
}
