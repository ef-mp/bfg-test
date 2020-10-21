import React, { useCallback, useState } from "react"
import PropTypes from "prop-types"

import { ClickAwayListener, List, Paper } from "@material-ui/core"
import Fade from "@material-ui/core/Fade"
import { DataListItem } from "./includes/DataListItem/DataListItem"
import { DropDown } from "../DropDown/DropDown"
import { useDropDown } from "../../hooks/useDropDown"
import { AuthorCard } from "../AuthorCard/AuthorCard"
import { DropTarget } from "../DropTarget/DropTarget"
import { useEscape } from "../../hooks/useEscape"

export const DataList = (props) => {
  const {
    items = [],
    onIncrement,
    onDecrement,
    onDragEnd,
    onDoubleClick,
    onItemKeyDown,
  } = props

  const [selected, setSelected] = useState({
    firstId: "",
    secondId: "",
  })
  // возвращает переменную текущего открытого элемента и клик хендлеры
  const [
    activeItem,
    dropDownClickHandler,
    dropDownClickAway,
    dblClickHandler,
  ] = useDropDown()

  useEscape(() => {
    setSelected({ firstId: "", secondId: "" })
  })
  useEscape(dropDownClickAway)

  const decrementClickHandler = useCallback(
    (itemIndex) => {
      onDecrement(itemIndex)
    },
    [onDecrement]
  )
  const incrementClickHandler = useCallback(
    (itemIndex) => {
      onIncrement(itemIndex)
    },
    [onIncrement]
  )

  const doubleClickHandler = useCallback(
    (id) => {
      dblClickHandler()
      let tmpState = {}
      if (selected.firstId) {
        tmpState = { ...selected, secondId: id }
        onDoubleClick(tmpState)
        setSelected(tmpState)
        // setTimeout для анимации меняющихся менстами элементов
        setTimeout(() => setSelected({ firstId: "", secondId: "" }), 200)
      } else {
        setSelected({ ...selected, firstId: id })
      }
    },
    [dblClickHandler, onDoubleClick, selected]
  )

  const clickAwayHandler = useCallback(() => {
    dropDownClickAway()
    setSelected({ ...selected, firstId: "", secondId: "" })
  }, [dropDownClickAway, selected])

  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
      <Fade in={!!items.length} timeout={300}>
        <Paper>
          <List component="ul">
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
                <DropTarget key={questionId} id={questionId}>
                  {(canDrop) => (
                    <DropDown
                      show={activeItem === index}
                      onClick={() => dropDownClickHandler(index)}
                      onDoubleClick={() => doubleClickHandler(questionId)}
                      onShiftKeyDown={(e) => onItemKeyDown(e, index)}
                      head={
                        // всегда видная часть drop-down
                        <DataListItem
                          isAnswered={isAnswered}
                          highlight={
                            questionId === selected.firstId ||
                            questionId === selected.secondId ||
                            canDrop
                          }
                          title={title}
                          score={score}
                          id={questionId}
                          image={owner.profileImage}
                          onIncrement={() => incrementClickHandler(index)}
                          onDecrement={() => decrementClickHandler(index)}
                          onDragEnd={onDragEnd}
                        />
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
                  )}
                </DropTarget>
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
    PropTypes.exact({
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
  onDoubleClick: PropTypes.func.isRequired,
  onItemKeyDown: PropTypes.func.isRequired,
}
