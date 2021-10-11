import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';

const Article: React.FunctionComponent = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={
          <Avatar
            alt="ImageIcon"
            src="https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/737344/8ea286bf47d13f6f33f3ac840c3e03595511fd1f/x_large.png?1600828067%22"
          />
        }
        title="ABC139 C - Lower を解いた"
        subheader="2021-10-11に更新"
      />
      <CardContent>
        <Typography>
          問題文の通りに書いてみた MaximalValue.py N = int(input()) A = [0]*N B
          = list(map(int,input().split())) for i ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          href="https://qiita.com/AKpirion/items/e42e433491c9ff2b7dd1"
          target="_blank"
          rel="noopener noreferrer"
        >
          記事を見る（外部サイトに移動します）
          <LaunchIcon fontSize="inherit" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Article;
