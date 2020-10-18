import React from "react"
import PropTypes from "prop-types"
import { Paper } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

export const AuthorCard = (props) => {
  const {
    owner: { displayName, link, reputation },
    viewCount,
    postLink,
  } = props

  return (
    <Paper variant="outlined" className="author-card">
      <Box p="20px">
        <Box display="flex" mb={1}>
          <Typography
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

        <Box display="flex" mb={1}>
          <Box mr="4px">
            <Typography variant="body2">Репутация: </Typography>
          </Box>
          <Typography variant="subtitle2">{reputation}</Typography>
        </Box>

        <Box display="flex" mb={1}>
          <Box mr="4px">
            <Typography variant="body2">Количество просмотров: </Typography>
          </Box>
          <Typography variant="subtitle2">{viewCount}</Typography>
        </Box>

        <Box display="flex" mt={1}>
          <Button
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
  postLink: PropTypes.string.isRequired,
}
