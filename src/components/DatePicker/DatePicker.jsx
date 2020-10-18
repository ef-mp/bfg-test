import React, { useState } from "react"
import { DatePicker } from "@material-ui/pickers"
import PropTypes from "prop-types"

export const AppDatePicker = (props) => {
  const { onChange, initialDate } = props
  const [date, setDate] = useState(initialDate)
  const [startDate, setStartDate] = useState(null)

  const changeHandler = (input) => {
    setDate(input)
  }

  const openHandler = () => {
    setStartDate(date)
  }

  const closeHandler = () => {
    if (date && startDate.toDateString() !== date.toDateString()) {
      onChange(date)
    }
  }

  return (
    <DatePicker
      onChange={changeHandler}
      onClose={closeHandler}
      onOpen={openHandler}
      value={date}
      minDate="01.01.1900"
      views={["date"]}
      inputVariant="outlined"
      variant="inline"
      size="small"
      disableFuture
      format="dd.MM.yy"
    />
  )
}

AppDatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  initialDate: PropTypes.instanceOf(Date).isRequired,
}

DatePicker.defaultProps = {
  maxDate: new Date(),
}
