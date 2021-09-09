import React from 'react';
import { Link } from 'react-router-dom';

const Title: React.FunctionComponent = () => {
  return (
    <div>
      <h1>技術記事チェッカー</h1>
      <Link to="/">Qiita</Link>
      <Link to="/zenn">Zenn</Link>
    </div>
  );
};

export default Title;
