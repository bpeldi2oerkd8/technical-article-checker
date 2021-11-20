import React from 'react';
import Selector from '../common/Selector';
import ArticleList from '../common/ArticleList';
import Box from '@material-ui/core/Box';

type ArticleData = {
  articleId: string;
  userIcon: string;
  userId: string;
  updatedAt: string;
  title: string;
  body: string;
  url: string;
};

const Zenn: React.FunctionComponent = () => {
  const [lang, setLang] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };

  const articleData: ArticleData[] = [];

  return (
    <Box>
      <Box textAlign="center">
        <h2>Zenn</h2>
      </Box>
      <Selector lang={lang} handleChange={handleChange} />
      <ArticleList articleData={articleData} />
    </Box>
  );
};

export default Zenn;
