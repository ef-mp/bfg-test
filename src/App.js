import React from "react"
import Container from "@material-ui/core/Container"
import { DatePicker } from "./components/DatePicker/DatePicker"

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <DatePicker />
      </Container>
    </div>
  )
}

export default App
