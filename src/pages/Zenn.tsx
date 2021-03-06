import React from 'react';
import Selector from '../common/Selector';
import ArticleList from '../common/ArticleList';
import Box from '@material-ui/core/Box';
import type { ArticleData } from '../type/ArticleData';

const Zenn: React.FunctionComponent = () => {
  const [topic, setTopic] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTopic(event.target.value as string);
  };

  const articleData: ArticleData[] = [];

  return (
    <Box>
      <Box textAlign="center">
        <h2>Zenn (Beta版)</h2>
        <p>Zennから公式のAPIが提供されていないため、Beta版</p>
      </Box>
      <Selector topic={topic} handleChange={handleChange} />
      <ArticleList articleData={articleData} />
    </Box>
  );
};

export default Zenn;
