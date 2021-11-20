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

type ArticleData = {
  articleId: string;
  userIcon: string;
  userId: string;
  updatedAt: string;
  title: string;
  body: string;
  url: string;
};

type Props = {
  articleData: ArticleData[];
};

const ArticleList: React.FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  const articleData = props.articleData;
  console.log(articleData.length);

  return (
    <Box my={2}>
      <Box textAlign="center">
        <h3>最新記事一覧</h3>
      </Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {articleData.length > 0 &&
            articleData.map((data: ArticleData) => (
              <Grid key={data.articleId} item xs={12} sm={6} lg={4}>
                <Article data={data} />
              </Grid>
            ))}
        </Grid>
      </div>
    </Box>
  );
};

export default ArticleList;
