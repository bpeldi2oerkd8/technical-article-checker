import React from 'react';
import Selector from '../common/Selector';
import Box from '@material-ui/core/Box';

const Zenn: React.FunctionComponent = () => {
  return (
    <Box>
      <Box textAlign="center">
        <h2>Zenn</h2>
      </Box>
      <Selector />
    </Box>
  );
};

export default Zenn;
