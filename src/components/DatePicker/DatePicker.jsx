import React, { useEffect, useState } from "react"
import { KeyboardDatePicker } from "@material-ui/pickers"
import PropTypes from "prop-types"

export const DatePicker = (props) => {
  const { onChange, initialDate, maxDate = new Date(), helperText } = props
  const [date, setDate] = useState(initialDate)
  const [startDate, setStartDate] = useState(null)

  const changeHandler = (input) => {
    setDate(input)
  }

  const openHandler = () => {
    setStartDate(date)
  }

  const closeHandler = () => {
    if (startDate.toDateString() !== date.toDateString()) {
      onChange(date)
    }
  }

  return (
    <KeyboardDatePicker
      onChange={changeHandler}
      onClose={closeHandler}
      onOpen={openHandler}
      autoOk={false}
      value={date}
      maxDate={maxDate}
      inputVariant="outlined"
      variant="inline"
      size="small"
      invalidDateMessage="Неверный формат даты"
      maxDateMessage="Дата не может быть больше текущей"
      helperText={helperText}
      format="dd.MM.yy"
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  )
}

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  initialDate: PropTypes.instanceOf(Date).isRequired,
  maxDate: PropTypes.instanceOf(Date),
  helperText: PropTypes.string.isRequired,
}

DatePicker.defaultProps = {
  maxDate: new Date(),
}
