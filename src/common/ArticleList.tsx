import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Article from '../common/Article';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const ArticleList: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box my={2}>
      <Box textAlign="center">
        <h3>最新記事一覧</h3>
      </Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <Article />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Article />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Article />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Article />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Article />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Article />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default ArticleList;
