import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import App from "./App"
import "./styles/main.scss"
import { store } from "./store"

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
