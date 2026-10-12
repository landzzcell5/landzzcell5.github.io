# landzzcell5.github.io

landzzcell5 のポートフォリオサイト（ひな形）です。
公開URL: https://landzzcell5.github.io/

## ファイル構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | ページの中身（文章・リンク） |
| `style.css` | 見た目（色・文字・レイアウト） |
| `script.js` | スマホメニュー、ふわっと表示などの動き |

## 書き換えるところ

`index.html` を開いて、次の仮テキストを自分の内容に変えてください。

- 「あなたの名前」「Your Name」… ヒーローと About の名前
- キャッチコピー、自己紹介文、プロフィール表（所属・拠点・好きなもの）
- Works の作品 4 件（タイトル・説明・`href="#"` のリンク先）
- すきなこと（言語）のタグ
- News の日付と出来事
- Contact の X / Instagram / メールアドレス

### 画像を入れるとき

1. `images/` フォルダを作って画像を入れる
2. `<span class="mono">Photo</span>` や `<span class="mono">Image</span>` を
   `<img src="images/ファイル名.jpg" alt="説明">` に置き換える

### 色を変えるとき

`style.css` の一番上 `:root { ... }` の色コードを変えるだけで全体が変わります。
（下の `@media (prefers-color-scheme: dark)` はダークモード用です）

## 更新のしかた

ファイルを編集して `main` ブランチに push すると、数分で公開ページに反映されます。
