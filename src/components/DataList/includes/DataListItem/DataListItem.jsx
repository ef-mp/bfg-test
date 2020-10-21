import React from "react"
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"
import { useDrag } from "react-dnd"
import { dndTypes } from "../../../../constants/dndTypes"
import { ListItemActions } from "./listItemActions"

export const DataListItem = (props) => {
  const {
    image,
    title,
    score,
    onIncrement,
    onDecrement,
    isAnswered,
    onDragEnd,
    highlight,
    id,
  } = props

  const [{ isDragging }, dragRef] = useDrag({
    item: { id, type: dndTypes.listItem },
    end: (item, monitor) => {
      const dropTarget = monitor.getDropResult()
      if (item && dropTarget) {
        onDragEnd(item, dropTarget)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <Box
      borderLeft={4}
      borderColor={isAnswered ? "success.main" : "transparent"}
      className={[
        highlight || isDragging ? "data-list-item_highlight" : "",
        "data-list-item",
      ].join(" ")}
      ref={dragRef}
    >
      <ListItem classes={{ root: "data-list-item__root" }}>
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

        <ListItemActions onDecrement={onDecrement} onIncrement={onIncrement} />
      </ListItem>
    </Box>
  )
}

DataListItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  highlight: PropTypes.bool.isRequired,
}

DataListItem.defaultProps = {
  image:
    "https://www.materialui.co/materialIcons/social/person_black_216x216.png",
}
