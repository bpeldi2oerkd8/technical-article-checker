import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import './App.css';
import Qiita from './pages/Qiita';
import Zenn from './pages/Zenn';
import Container from '@material-ui/core/Container';

const App: React.FunctionComponent = () => {
  return (
    <Container maxWidth="lg">
      <Switch>
        <Route exact path="/">
          <Qiita />
        </Route>
        <Route path="/zenn">
          <Zenn />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
