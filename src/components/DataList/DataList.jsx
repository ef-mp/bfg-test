import React from "react"
import PropTypes from "prop-types"

import { ClickAwayListener, List, Paper } from "@material-ui/core"
import Fade from "@material-ui/core/Fade"
import { DataListItem } from "./includes/DataListItem/DataListItem"
import { DropDown } from "../DropDown/DropDown"
import { useDropDown } from "../../hooks/useDropDown"
import { AuthorCard } from "../AuthorCard/AuthorCard"
import { DropTarget } from "./includes/DropTarget/DropTarget"

export const DataList = (props) => {
  const { items = [], onIncrement, onDecrement, onDragEnd } = props

  const [activeItem, dropDownClickHandler, clickAwayHandler] = useDropDown()

  const decrementClickHandler = (itemIndex) => {
    onDecrement(itemIndex)
  }
  const incrementClickHandler = (itemIndex) => {
    onIncrement(itemIndex)
  }

  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
      <Fade in={!!items.length} timeout={300}>
        <Paper>
          <List component="nav">
            {items.map(
              (
                {
                  questionId,
                  title,
                  score,
                  owner,
                  viewCount,
                  postLink,
                  isAnswered,
                },
                index
              ) => (
                <DropDown
                  key={questionId}
                  show={activeItem === index}
                  onClick={() => dropDownClickHandler(index)}
                  head={
                    // всегда видная часть drop-down
                    <DropTarget id={questionId}>
                      <DataListItem
                        highlight={isAnswered}
                        title={title}
                        score={score}
                        id={questionId}
                        image={owner.profileImage}
                        onIncrement={() => incrementClickHandler(index)}
                        onDecrement={() => decrementClickHandler(index)}
                        onDragEnd={onDragEnd}
                      />
                    </DropTarget>
                  }
                  content={
                    // открывающаяся часть drop-down
                    <AuthorCard
                      postLink={postLink}
                      owner={owner}
                      open={activeItem === index}
                      viewCount={viewCount}
                    />
                  }
                />
              )
            )}
          </List>
        </Paper>
      </Fade>
    </ClickAwayListener>
  )
}

DataList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      questionId: PropTypes.number,
      title: PropTypes.string,
      score: PropTypes.number,
      owner: PropTypes.object.isRequired,
      viewCount: PropTypes.number,
      postLink: PropTypes.string,
      isAnswered: PropTypes.bool,
    })
  ).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
}
