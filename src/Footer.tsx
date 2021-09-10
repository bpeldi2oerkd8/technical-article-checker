import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Footer: React.FunctionComponent = () => {
  return (
    <Box p={1} textAlign="center" color="background.primary">
      <Typography>
        This page is created by&nbsp;
        <a
          href="https://github.com/bpeldi2oerkd8"
          target="_blank"
          rel="noopener noreferrer"
        >
          bpeldi2oerkd8
        </a>
        .
      </Typography>
    </Box>
  );
};

export default Footer;
