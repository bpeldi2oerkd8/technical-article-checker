import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Title: React.FunctionComponent = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">技術記事チェッカー</Typography>
        <Link to="/">Qiita</Link>
        <Link to="/zenn">Zenn</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Title;
