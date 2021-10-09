import React from 'react';
import Selector from '../common/Selector';
import Box from '@material-ui/core/Box';

const Qiita: React.FunctionComponent = () => {
  // const data = JSON.parse();

  return (
    <Box>
      <Box textAlign="center">
        <h2>Qiita</h2>
      </Box>
      <Selector />
    </Box>
  );
};

export default Qiita;
