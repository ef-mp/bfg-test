import React, { useState } from "react"
import { DatePicker } from "@material-ui/pickers"
import PropTypes from "prop-types"
import { useEscape } from "../../hooks/useEscape"

export const AppDatePicker = (props) => {
  const { onChange, initialDate } = props
  const [date, setDate] = useState(initialDate)
  const [startDate, setStartDate] = useState(null)
  const [open, setOpen] = useState(false)

  const changeHandler = (input) => {
    setDate(input)
  }

  const openHandler = () => {
    setStartDate(date)
    setOpen(true)
  }

  const closeHandler = () => {
    setOpen(false)
    if (date && startDate && startDate.toDateString() !== date.toDateString()) {
      onChange(date)
    }
  }

  useEscape(() => {
    setOpen(false)
  })

  const keyPressHandler = (e) => {
    if (e.key === "Enter") setOpen(true)
  }

  return (
    <div onKeyPress={keyPressHandler}>
      <DatePicker
        open={open}
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
    </div>
  )
}

AppDatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  initialDate: PropTypes.instanceOf(Date).isRequired,
}

DatePicker.defaultProps = {
  maxDate: new Date(),
}
