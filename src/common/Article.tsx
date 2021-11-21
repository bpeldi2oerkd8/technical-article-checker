import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import Box from '@material-ui/core/Box';
import type { ArticleData } from '../type/ArticleData';

type Props = {
  data: ArticleData;
};

const Article: React.FunctionComponent<Props> = (props: Props) => {
  const data = props.data;

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar alt="ImageIcon" src={data.userIcon} />}
        title={data.userId} //user.id
        subheader={data.updatedAt + 'に更新'} //updated_at
      />
      <CardContent>
        {/* title */}
        <Box mb={1}>
          <Typography variant="h6">{data.title}</Typography>
        </Box>
        {/* body */}
        {data.body}
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          href={data.url} //url
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
