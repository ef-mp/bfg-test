import React from "react"
import { useDispatch } from "react-redux"
import { fetchQuestions } from "../store/modules/questions/actions"
import { DateSearch } from "../components/DateSearch/DateSearch"

export const DateSearchContainer = () => {
  const dispatch = useDispatch()

  const searchHandler = (date) => {
    dispatch(
      fetchQuestions({
        fromDate: new Date(date).getTime(),
      })
    )
  }

  return (
    <DateSearch onSearch={searchHandler} initialDate={new Date("01.01.2018")} />
  )
}
