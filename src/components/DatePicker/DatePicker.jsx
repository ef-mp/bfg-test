import React, { useState } from "react"
import { KeyboardDatePicker } from "@material-ui/pickers"

export const DatePicker = (props) => {
  const {} = props
  const [date, setDate] = useState(new Date("2014-08-18T21:11:54"))

  const changeHandler = (input) => {
    setDate(input)
  }

  return (
    <KeyboardDatePicker
      onChange={changeHandler}
      value={date}
      invalidDateMessage="Неверный формат даты"
      variant="inline"
      format="mm.dd.yy"
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  )
}
