import React, { useEffect } from "react"
import Container from "@material-ui/core/Container"
import { useDispatch } from "react-redux"
import { DatePicker } from "./components/DatePicker/DatePicker"
import { fetchQuestions } from "./store/modules/questions/actions"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuestions())
  }, [dispatch])
  return (
    <div className="App">
      <Container maxWidth="sm">
        <DatePicker />
      </Container>
    </div>
  )
}

export default App
