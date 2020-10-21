import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchQuestions,
  questionsDecrementScore,
  questionsIncrementScore,
  questionsShiftDown,
  questionsShiftUp,
  replaceQuestions,
} from "../store/modules/questions/actions"
import { DataList } from "../components/DataList/DataList"
import { Loader } from "../components/Loader/Loader"

export const QuestionsListContainer = () => {
  const dispatch = useDispatch()
  const { data, loading } = useSelector((state) => state.questions)

  useEffect(() => {
    const startDate = new Date("01/01/18")
    dispatch(fetchQuestions({ fromDate: startDate }))
  }, [dispatch])

  const incrementClickHandler = (index) => {
    dispatch(questionsIncrementScore(index))
  }

  const decrementClickHandler = (index) => {
    dispatch(questionsDecrementScore(index))
  }

  const dragEndHandler = (item, dropTarget) => {
    dispatch(
      replaceQuestions({
        firstId: item.id,
        secondId: dropTarget.id,
      })
    )
  }

  const doubleClickHandler = ({ firstId, secondId }) => {
    dispatch(replaceQuestions({ firstId, secondId }))
  }

  const itemKeyPressHandler = (e, index) => {
    if (e.shiftKey && e.key === "ArrowUp") dispatch(questionsShiftUp(index))
    if (e.shiftKey && e.key === "ArrowDown") dispatch(questionsShiftDown(index))
  }

  return (
    <>
      {/* при первой загрузке отображается спиннер, при последующих контент становится полупрозрачным с пульсирующей анимацией */}
      <Loader firstLoading={!data.length && loading} loading={loading}>
        <DataList
          items={data}
          onDragEnd={dragEndHandler}
          onIncrement={incrementClickHandler}
          onDecrement={decrementClickHandler}
          onDoubleClick={doubleClickHandler}
          onItemKeyDown={itemKeyPressHandler}
        />
      </Loader>
    </>
  )
}
