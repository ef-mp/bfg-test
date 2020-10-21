import React from "react"
import PropTypes from "prop-types"
import { Paper } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const RenderStats = ({ title, amount }) => (
  <Box display="flex" mb={1}>
    <Box mr="4px">
      <Typography variant="body2">{title}</Typography>
    </Box>
    <Typography variant="subtitle2">{amount}</Typography>
  </Box>
)

export const AuthorCard = (props) => {
  const {
    owner: { displayName, link, reputation },
    viewCount,
    open = false, // для корректоно tabindex
    postLink,
  } = props

  return (
    <Paper variant="outlined" className="author-card">
      <Box p="20px">
        <Box display="flex" mb={1}>
          <Typography
            tabIndex={open ? 0 : -1}
            variant="h5"
            component="a"
            color="primary"
            href={link}
            target="_blank"
            className="author-card__title"
          >
            {displayName}
          </Typography>
        </Box>

        <RenderStats title="Количество просмотров:" amount={viewCount} />
        <RenderStats title="Репутация:" amount={reputation} />

        <Box display="flex" mt={1}>
          <Button
            tabIndex={open ? 0 : -1}
            variant="outlined"
            color="primary"
            href={postLink}
            target="_blank"
            size="small"
          >
            Страница вопроса
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

AuthorCard.propTypes = {
  owner: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    userId: PropTypes.number,
    reputation: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  viewCount: PropTypes.number.isRequired,
  open: PropTypes.bool,
  postLink: PropTypes.string.isRequired,
}

AuthorCard.defaultProps = {
  open: false,
}

RenderStats.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}
