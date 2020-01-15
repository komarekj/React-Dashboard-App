import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Card, TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { useResourceContext } from '../resourceHooks';

const useStyles = makeStyles(theme => ({
  searchCard: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  searchForm: {
    display: 'flex',
  },
  searchFieldWrap: {
    flexGrow: 1,
  },
}));

const ResourceSearch = () => {
  // Hooks
  const classes = useStyles();
  const history = useHistory();
  const { path } = useResourceContext();
  const [searchValue, setSearchValue] = useState('');

  // Handlers
  const handleFieldChange = event => {
    setSearchValue(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (searchValue !== '') {
      history.push(`${path}/search/${searchValue}`);
    } else {
      history.push(`${path}`);
    }
  };

  return (
    <Card classes={{ root: classes.searchCard }}>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item sm="auto" classes={{ root: classes.searchFieldWrap }}>
            <TextField
              id="standard-basic"
              label="Search"
              classes={{ root: classes.searchField }}
              fullWidth={true}
              value={searchValue}
              onChange={handleFieldChange}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default ResourceSearch;
