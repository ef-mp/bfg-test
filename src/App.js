import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { QuestionsListContainer } from "./containers/QuestionsListContainer"
import { DateSearchContainer } from "./containers/DateSearchContainer"
import { Layout } from "./components/Layout/Layout"

function App() {
  return (
    <div className="App">
      <Layout>
        <Box mb={3}>
          <Typography display="inline" variant="h6" component="h1">
            5 самых популярных вопросов на Stackoverflow, содержащих строку
            &quot;react-redux&quot;, начиная с:
          </Typography>
        </Box>
        <Box mb={4}>
          <DateSearchContainer />
        </Box>
        <QuestionsListContainer />
      </Layout>
    </div>
  )
}

export default App
