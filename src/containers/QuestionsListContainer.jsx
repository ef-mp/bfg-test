import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchQuestions,
  questionsDecrementScore,
  questionsIncrementScore,
  replaceQuestions,
} from "../store/modules/questions/actions"
import { DataList } from "../components/DataList/DataList"
import { Loader } from "../components/Loader/Loader"

export const QuestionsListContainer = () => {
  const dispatch = useDispatch()
  const { data, loading } = useSelector((state) => state.questions)

  useEffect(() => {
    dispatch(fetchQuestions({}))
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

  return (
    <>
      {/* при первой загрузке отображается спиннер, при последующих контент становится полупрозрачным с пульсирующей анимацией */}
      <Loader firstLoading={!data.length && loading} loading={loading}>
        <DataList
          onDragEnd={dragEndHandler}
          onIncrement={incrementClickHandler}
          onDecrement={decrementClickHandler}
          items={data}
          loading={loading}
        />
      </Loader>
    </>
  )
}
