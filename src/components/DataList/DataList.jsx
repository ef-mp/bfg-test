import React from "react"
import PropTypes from "prop-types"

import { ClickAwayListener, List, Paper } from "@material-ui/core"
import Fade from "@material-ui/core/Fade"
import { DataListItem } from "./includes/DataListItem"
import { DropDown } from "../DropDown/DropDown"
import { useDropDown } from "../../hooks/useDropDown"
import { AuthorCard } from "../AuthorCard/AuthorCard"

export const DataList = (props) => {
  const { items = [], onIncrementClick, onDecrementClick } = props

  const decrementClickHandler = (itemIndex) => {
    onDecrementClick(itemIndex)
  }
  const incrementClickHandler = (itemIndex) => {
    onIncrementClick(itemIndex)
  }

  const [activeItem, dropDownClickHandler, clickAwayHandler] = useDropDown()

  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
      <Fade in={items.length} timeout={300}>
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
                    <DataListItem
                      highlight={isAnswered}
                      title={title}
                      score={score}
                      image={owner.profileImage}
                      onIncrementClick={() => incrementClickHandler(index)}
                      onDecrementClick={() => decrementClickHandler(index)}
                    />
                  }
                  content={
                    // открывающаяся часть drop-down
                    <AuthorCard
                      postLink={postLink}
                      owner={owner}
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
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
}
