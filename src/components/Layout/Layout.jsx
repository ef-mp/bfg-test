import React from "react"
import Box from "@material-ui/core/Box"
import PropTypes from "prop-types"
import Container from "@material-ui/core/Container"

export const Layout = (props) => {
  const { children } = props

  return (
    <Container maxWidth="sm">
      <Box py={5}>{children}</Box>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
