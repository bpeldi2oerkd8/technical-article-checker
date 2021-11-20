import React from 'react';
import Selector from '../common/Selector';
import ArticleList from '../common/ArticleList';
import Box from '@material-ui/core/Box';
import axios from 'axios';

type Tag = {
  name: string;
  versions: string[];
};

type Group = {
  created_at: string;
  description: string;
  name: string;
  private: boolean;
  updated_at: string;
  url_name: string;
};

type TeamMemberShip = {
  name: string;
};

type ApiResponse = {
  render_body: string;
  body: string;
  coediting: boolean;
  comment_count: number;
  create_at: string;
  group: Group | null;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  tags: Tag[];
  title: string;
  updated_at: string;
  url: string;
  user: {
    description: string;
    facebook_id: string;
    followees_count: number;
    followers_count: number;
    github_login_name: string;
    id: string;
    item_count: number;
    linkedin_id: string;
    location: string;
    name: string;
    organization: string;
    permanent_id: number;
    profile_image_url: string;
    team_only: boolean;
    twitter_screen_name: string | null;
    website_url: string;
  };
  page_views_count: number | null;
  team_membership: TeamMemberShip | null;
};

type ArticleData = {
  articleId: string;
  userIcon: string;
  userId: string;
  updatedAt: string;
  title: string;
  body: string;
  url: string;
};

const Qiita: React.FunctionComponent = () => {
  const [lang, setLang] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };

  const baseApiUrl = 'https://qiita.com/api/v2/items?query=tag';
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // 1週間前
  const from =
    oneWeekAgo.getFullYear() +
    '-' +
    (oneWeekAgo.getMonth() + 1) +
    '-' +
    oneWeekAgo.getDate();
  const apiUrl = baseApiUrl + lang + '+created%3A%3E' + from;
  const accessToken = process.env.REACT_APP_QIITA_ACCESS_TOKEN
    ? process.env.REACT_APP_QIITA_ACCESS_TOKEN
    : '';

  let articleData: ArticleData[] = [];
  // APIによるデータの取得
  axios
    .get<ApiResponse[]>(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      const resData = res.data;
      articleData = resData.map((article) => {
        return {
          articleId: article.id,
          userIcon: article.user.profile_image_url,
          userId: article.user.id,
          updatedAt: article.updated_at,
          title: article.title,
          body: article.render_body,
          url: article.url,
        };
      });
    })
    .catch(() => {
      articleData = [];
    });

  return (
    <Box>
      <Box textAlign="center">
        <h2>Qiita</h2>
      </Box>
      <Selector lang={lang} handleChange={handleChange} />
      <ArticleList articleData={articleData} />
    </Box>
  );
};

export default Qiita;
