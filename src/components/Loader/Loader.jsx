import React from "react"
import Box from "@material-ui/core/Box"
import PropTypes from "prop-types"
import { ReactComponent as LoadingIcon } from "../../icons/loader.svg"

export const Loader = (props) => {
  const { children, loading, firstLoading } = props

  return (
    <Box className="loader">
      {/* при первой загрузки, когда нет контента отображается спиннер */}
      {firstLoading && (
        <div className="loader__icon-box">
          <LoadingIcon className="loader__icon" />
        </div>
      )}
      {/* при последующих заагрузках контент становится полупрозрачным с пульсирующей анимацией */}
      {!firstLoading && (
        <div className={loading ? "loader_loading" : ""}>{children}</div>
      )}
    </Box>
  )
}

Loader.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool.isRequired,
  firstLoading: PropTypes.bool.isRequired,
}
