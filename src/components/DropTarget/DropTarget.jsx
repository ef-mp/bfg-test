import React from "react"
import { useDrop } from "react-dnd"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"
import { dndTypes } from "../../constants/dndTypes"

export const DropTarget = (props) => {
  const { id, children } = props
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: dndTypes.listItem,
    drop: () => ({ id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const getCanDrop = () => canDrop && isOver

  return (
    <div ref={drop}>
      <Box>{() => children(getCanDrop())}</Box>
    </div>
  )
}

DropTarget.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired,
}
