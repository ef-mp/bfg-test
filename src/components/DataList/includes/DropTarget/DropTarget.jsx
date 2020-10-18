import React from "react"
import { useDrop } from "react-dnd"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"
import { dndTypes } from "../../../../constants/dndTypes"

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

  return (
    <div ref={drop}>
      <Box
        style={{
          outline: canDrop && isOver && "2px solid #3f51b5",
          pointerEvents: canDrop && isOver && "none",
        }}
      >
        {children}
      </Box>
    </div>
  )
}

DropTarget.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
}
