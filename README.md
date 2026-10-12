# Web Design Gallery by RSS7

**見て、動かして、選べるホームページデザイン集。**

- [公開ギャラリー](https://oosaka0123-sudo.github.io/ks01/)
- [パーティクル体験ページ](https://oosaka0123-sudo.github.io/ks01/particles.html)
- [元の家のホームページ風デモ](https://oosaka0123-sudo.github.io/ks01/demo.html)
- [チャットホームページ](https://chat.rss7.net/)

## ページ構成

- `index.html`：クライアント向けギャラリー。01〜30の演出カードと、31番パーティクル専用ページへのリンク。
- `particles.html`：31番「生き物のように動く光の粒」。Canvas 2D、カーソル・タッチへの反応、再生停止、粒子数の調整、reduced-motion対応。
- `demo.html`：2026-10-11に制作した家のホームページ風の元デザイン（保存版）。

## ギャラリーにある演出

- 01〜08：フルスクリーンメニュー、透過ヘッダー、スクロール／画像リビール、進捗バー、マーキー、ホバー、リンク下線
- 09〜16：FAQ、横スワイプ、Before/After比較、カウントアップ、タブ、詳細ポップアップ、コピー、テーマ切り替え
- 17〜24：絞り込み、入力チェック、ズーム、マーカー、矢印、SVGラインドロー、もっと見る、表示形式切り替え
- 25〜30：ステップ表示、トースト通知、目次の現在位置、新着表示、フローティングCTA、読み込みプレースホルダー
- 31：パーティクルアニメーション（専用ページ）

## 運用境界

- このRepositoryは**クライアント向け展示サイト**。再利用するデザイン部品の正本は [web-design-master](https://github.com/oosaka0123-sudo/web-design-master)。
- GitHub Pagesは `main` のルートを公開。
- `chat-homepage` と `rss7-house` への自動反映はしない。`rss7-house` は読み取り専用。
- ギャラリートップに画像を追加しない。元デモはオリジナルを維持する。
- 見本は制作結果・実績を保証するものではない。

## 検証記録

2026-10-12：GitHub Pagesデプロイ成功を確認。公開URL `/` と `/particles.html` はHTTP 200。ギャラリー／パーティクルからチャットホームページ、チャットホームページからギャラリー、制作の流れページから国内参考サイト3選へのリンクが公開HTML内に存在することを確認。

2026-10-11：ChatGPT・Claude CLI・Antigravity CLI経由GeminiでWeb小技の独立提案・比較を実施。全31種類の実機操作テストやWeb Vitals測定は**未実施**。一部のデモは仕組みを理解するための簡易表現。
