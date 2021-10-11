import React from 'react';
import Selector from '../common/Selector';
import ArticleList from '../common/ArticleList';
import Box from '@material-ui/core/Box';

const Qiita: React.FunctionComponent = () => {
  // const data = JSON.parse();
  const [lang, setLang] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };

  return (
    <Box>
      <Box textAlign="center">
        <h2>Qiita</h2>
      </Box>
      <Selector lang={lang} handleChange={handleChange} />
      <ArticleList />
    </Box>
  );
};

export default Qiita;
