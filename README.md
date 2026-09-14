# Yoshinori Ito — Portfolio

GitHub Pages 向けの静的ポートフォリオです。

公開予定 URL: https://kathysamurai.github.io/portfolio/

## 公開手順

1. このリポジトリを `main` に push する
2. GitHub の **Settings → Pages**
3. Source を **Deploy from a branch**
4. Branch を `main`、フォルダを `/ (root)` にして保存

数分後に上記 URL で開きます。カスタムドメインがある場合も、同じ画面から設定できます。

## 構成

- `index.html` — ページ本体
- `resume.html` — 詳細な職務経歴書（印刷 / PDF 保存）
- `assets/style.css` — スタイル
- `assets/resume.css` — 職務経歴書のスタイル
- `assets/main.js` — モバイルメニューと現在位置
- `assets/resume.js` — 印刷ダイアログ
- `favicon.svg`

ビルド手順はありません。静的ファイルだけです。

## 非公開にしているもの

`職務経歴書.md` は `.gitignore` しています。ヒアリング時の私的な記述が含まれるため、公開リポジトリには上げない想定です。
