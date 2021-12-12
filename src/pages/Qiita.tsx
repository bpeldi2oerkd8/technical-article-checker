import React from 'react';
import Selector from '../common/Selector';
import ArticleList from '../common/ArticleList';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import type { ArticleData } from '../type/ArticleData';
import Typography from '@material-ui/core/Typography';

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
  rendered_body: string;
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

// Qiita APIからデータの取得
const getQiitaData = async (apiUrl: string, accessToken: string) => {
  let articleData: ArticleData[];

  if (accessToken) {
    // APIキーがある場合
    articleData = await axios
      .get<ApiResponse[]>(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        const resData = res.data;
        const aData: ArticleData[] = resData.map((article) => {
          return {
            articleId: article.id,
            userIcon: article.user.profile_image_url,
            userId: article.user.id,
            updatedAt: convertUpdatedAt(article.updated_at),
            title: article.title,
            body: article.body,
            url: article.url,
          };
        });
        return aData;
      })
      .catch(() => {
        console.log('failed.');
        return [];
      });
  } else {
    // APIキーがない場合
    articleData = await axios
      .get<ApiResponse[]>(apiUrl)
      .then((res) => {
        const resData = res.data;
        const aData: ArticleData[] = resData.map((article) => {
          return {
            articleId: article.id,
            userIcon: article.user.profile_image_url,
            userId: article.user.id,
            updatedAt: convertUpdatedAt(article.updated_at),
            title: article.title,
            body: article.body,
            url: article.url,
          };
        });
        return aData;
      })
      .catch(() => {
        console.log('failed.');
        return [];
      });
  }

  return articleData;
};

// 日付フォーマットの変更（YYYY/MM/DD hh:mm:ss）
const convertUpdatedAt = (updatedAt: string) => {
  updatedAt = updatedAt.replace(/-/g, '/');
  updatedAt = updatedAt.replace(/T/g, ' ');
  updatedAt = updatedAt.replace(/\+09:00/g, '');
  return updatedAt;
};

// bodyの変換（最初の3行分表示）
const convertBody = (body: string) => {
  let convertedBody: JSX.Element[];
  // 改行の置き換え
  convertedBody = body.split('\n').map((para, index) => {
    return <Typography key={index}>{para}</Typography>;
  });
  // 3行分表示
  convertedBody = convertedBody.slice(0, 3);
  return convertedBody;
};

const Qiita: React.FunctionComponent = () => {
  const [lang, setLang] = React.useState('');
  const [articleData, setArticleData] = React.useState<ArticleData[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };

  React.useEffect(() => {
    (async () => {
      const baseApiUrl = 'https://qiita.com/api/v2/items';

      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // 1週間前
      const from =
        oneWeekAgo.getFullYear() +
        '-' +
        (oneWeekAgo.getMonth() + 1) +
        '-' +
        oneWeekAgo.getDate();

      const apiUrl = lang
        ? baseApiUrl + '?query=tag%3A' + lang + '+updated%3A%3E' + from
        : baseApiUrl;

      const accessToken = process.env.REACT_APP_QIITA_ACCESS_TOKEN
        ? process.env.REACT_APP_QIITA_ACCESS_TOKEN
        : '';

      // APIによるデータの取得
      const aData = await getQiitaData(apiUrl, accessToken);
      setArticleData(aData as ArticleData[]);
    })();
  }, [setArticleData, lang]);

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
