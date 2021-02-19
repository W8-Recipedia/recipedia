import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Toolbar from './Searchbar';
import FavouriteCard from './FavouriteCard';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  favouriteCard: {
    height: '100%'
  }
}));

const Favourites = () => {
  const classes = useStyles();
  const [favourites] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Products"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {favourites.map((favourite) => (
              <Grid
                item
                key={favourite.id}
                lg={4}
                md={6}
                xs={12}
              >
                <FavouriteCard
                  className={classes.favouriteCard}
                  favourite={favourite}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
        </Box>
      </Container>
    </Page>
  );
};

export default Favourites;