import React from "react"
import ReactDOM from "react-dom"
import DateFnsUtils from "@date-io/date-fns"
import { Provider } from "react-redux"
import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from "react-dnd"

import App from "./App"

import { store } from "./store"
import "./styles/main.scss"

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById("root")
)
