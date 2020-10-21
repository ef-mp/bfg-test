import React, { useEffect } from "react"
import Box from "@material-ui/core/Box"
import Fade from "@material-ui/core/Fade"
import { QuestionsListContainer } from "./containers/QuestionsListContainer"
import { DateSearchContainer } from "./containers/DateSearchContainer"
import { Layout } from "./components/Layout/Layout"

function App() {
  return (
    <div className="App">
      <Layout>
        <Box mb={4}>
          <DateSearchContainer />
        </Box>
        <QuestionsListContainer />
      </Layout>
    </div>
  )
}

export default App
