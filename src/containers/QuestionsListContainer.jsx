import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchQuestions,
  questionsDecrementScore,
  questionsIncrementScore,
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

  return (
    <>
      {/* при первой загрузке отображается спиннер, при последующих контент становится полупрозрачным с пульсирующей анимацией */}
      <Loader firstLoading={!data.length && loading} loading={loading}>
        <DataList
          onIncrementClick={incrementClickHandler}
          onDecrementClick={decrementClickHandler}
          items={data}
          loading={loading}
        />
      </Loader>
    </>
  )
}
