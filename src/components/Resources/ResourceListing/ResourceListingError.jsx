import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';

const DEFAULT_TITLE = 'Ooops! Something Is Broken';
const DEFAULT_CONTENT = 'Go back and try again...';

const useStyles = makeStyles(theme => ({
  errorCard: {
    padding: theme.spacing(2),
  },
  errorTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  errorIcon: {
    marginRight: '.5rem',
  },
}));

const ListingError = ({ title = DEFAULT_TITLE, content = DEFAULT_CONTENT }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleBackClick = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Card classes={{ root: classes.errorCard }}>
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          classes={{ root: classes.errorTitle }}
        >
          <ErrorIcon classes={{ root: classes.errorIcon }} />
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleBackClick}>Go Back</Button>
      </CardActions>
    </Card>
  );
};

ListingError.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default ListingError;
