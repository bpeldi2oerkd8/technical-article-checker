import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Qiita from './pages/Qiita';
import Zenn from './pages/Zenn';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Qiita />
        </Route>
        <Route path="/zenn">
          <Zenn />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
