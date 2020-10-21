import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Fade from "@material-ui/core/Fade"
import { AppDatePicker } from "../DatePicker/DatePicker"

export const DateSearch = (props) => {
  const { onSearch, initialDate } = props
  const [date, setDate] = useState(initialDate)
  const [showSearch, setShowSearch] = useState(false)

  const dateChangeHandler = (input) => {
    setDate(input)
    setShowSearch(true)
  }

  const searchHandler = () => {
    onSearch(date)
    setShowSearch(false)
  }

  return (
    <Grid container spacing={2}>
      <Grid item>
        <AppDatePicker
          helperText="Дата начала поиска"
          initialDate={initialDate}
          onChange={dateChangeHandler}
        />
      </Grid>
      <Grid item>
        <Fade in={showSearch} timeout={300}>
          <Button onClick={searchHandler} variant="contained" color="primary">
            Найти
          </Button>
        </Fade>
      </Grid>
    </Grid>
  )
}

DateSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  initialDate: PropTypes.instanceOf(Date).isRequired,
}
