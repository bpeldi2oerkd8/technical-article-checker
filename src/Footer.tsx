import React from 'react';
import { Box, Link } from '@material-ui/core';

const Footer: React.FunctionComponent = () => {
  return (
    <Box
      p={1}
      textAlign="center"
      bgcolor="text.secondary"
      color="background.paper"
    >
      This page is created by&nbsp;
      <Link
        href="https://github.com/bpeldi2oerkd8"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        underline="always"
      >
        bpeldi2oerkd8
      </Link>
      .
    </Box>
  );
};

export default Footer;
