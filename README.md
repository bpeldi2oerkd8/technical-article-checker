# technical-article-checker

技術記事チェッカー（React, Typescript）  
[create-react-app](https://github.com/facebook/create-react-app)を用いて作成しました。  
サイトのデモは[こちら](https://bpeldi2oerkd8.github.io/technical-article-checker/)  

![page](https://user-images.githubusercontent.com/64352857/145704430-51bf3ada-1a19-40a0-92c4-0b705f2a11ef.jpg)

## 概要
技術記事を手軽に確認できるツールです。  
あらかじめ設定したサイトの指定したトピックの最新記事一覧を確認することができます。  
気になる記事があった場合は、その記事が掲載されているサイトに移動し、確認することができます。  
言語はTypeScript (React)を使用し、CSSフレームワークとしてmaterial-uiを用いました。  
ReactやTypeScriptに関して理解を深めるため、stateによるトピック情報の保持やReact Hooksの利用、型を意識した実装をしました。  
※現時点(2021.12.12現在)では、Zennから公式のAPIが提供されていないため、Zennのページは最新記事一覧が表示されません。

## 機能
### APIから最新記事一覧を取得
axiosを用いて公式のAPI(ex. Qiita API)から最新の記事情報を取得し、表示します。  

![page](https://user-images.githubusercontent.com/64352857/145704430-51bf3ada-1a19-40a0-92c4-0b705f2a11ef.jpg)

### 最新記事を確認するサイトの切り替え
最新記事を閲覧したいサイトを切り替えることができます。  
※現時点(2021.12.12現在)では、Zennから公式のAPIが提供されていないため、Zennのページは最新記事一覧が表示されません。  

![sites](https://user-images.githubusercontent.com/64352857/145705025-ff9c0db8-ccb0-4045-a053-ae5a63ab1b80.jpg)

### 気になるトピックの選択
気になるトピックを選択すると、そのトピックに関する最新記事が表示されます。  
トピックを選択しない場合は、すべてのトピックから最新記事が取得されます。  

![selector](https://user-images.githubusercontent.com/64352857/145705137-f1a0ae24-b484-47e0-9d00-10b89dbd28ca.jpg)

![docker-selected](https://user-images.githubusercontent.com/64352857/145705157-557f67c2-8f1d-46a6-8f7e-9995431ed676.jpg)

### 記事の閲覧
「記事を見る（外部サイトに移動します）」ボタンからその記事のページに移動し、記事を閲覧することができます。  

![page](https://user-images.githubusercontent.com/64352857/145704430-51bf3ada-1a19-40a0-92c4-0b705f2a11ef.jpg)

## 技術情報
### フロントエンド
- React
- TypeScript
- Create React App
- Material-UI v4
- axios
- remove-markdown

### デプロイ環境
- GitHub Pages

### 自動コード整形ツール
- ESLint
- Prettier
- Stylelint
- husky v6
