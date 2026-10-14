# CLAUDE.md — Web Design Gallery by RSS7（ks01）

クライアント向け展示サイト。GitHub Pages が `main` のルートを公開する（= `main` へのmergeが本番反映）。
Claude Code はセッション開始時にこのファイルを読み、詳細は正本へのリンクに従う。

## 0. セッション開始時（毎回）

1. このRepoの最新 `main` を確認（`git fetch origin main`）。
2. 最新マスターを取得して読む（Public・クラウドから読み取り可、2026-10-15 実確認）：
   ```
   git clone --depth 1 https://github.com/oosaka0123-sudo/ai-master /tmp/ai-master
   git clone --depth 1 https://github.com/oosaka0123-sudo/web-design-master /tmp/web-design-master
   ```
   取得できない場合も、下の「必須ルール」は常に守る。
3. 優先順位：**ai-master → web-design-master（KSデザインマスター）→ このRepoの README.md**。

## 1. 必須ルール（取得失敗時の最小セット）

- KSデザインマスターを適用：[web-design-master](https://github.com/oosaka0123-sudo/web-design-master)（`DESIGN_SYSTEM.md` / `AGENTS.md`）
- 既存デザイン・コンテンツ・機能を維持。**`demo.html` は保存版のため改変しない**
- スマホファースト（320 / 390px と PC で確認）
- ファビコン必須（`favicon.svg`）・サイト固有の透過PNGロゴ必須（`assets/brand/logo.png` / `logo-light.png`）
- 共有ボタン（`assets/js/site-share.js`）・統一フッター（`assets/css/site-footer.css`）を維持
- フッターに `powered by RSS7.ai Works`
- 詳細：[BRAND_ASSETS_STANDARD](https://github.com/oosaka0123-sudo/web-design-master/blob/main/BRAND_ASSETS_STANDARD.md) / [SITE_SHELL_STANDARD](https://github.com/oosaka0123-sudo/web-design-master/blob/main/SITE_SHELL_STANDARD.md) / [CLAUDE_REQUIRED_SKILLS](https://github.com/oosaka0123-sudo/web-design-master/blob/main/CLAUDE_REQUIRED_SKILLS.md)

## 2. 作業手順

- **ブランチ → PR → テスト → レビュー**。`main` へ直接pushしない。mergeはユーザー承認後。
- 実施していないレビュー・テスト・AI接続を「完了」と報告しない。
- `chat-homepage` / `rss7-house` へ自動反映しない。`rss7-house` は読み取り専用。
- ギャラリートップに写真・コンテンツ画像を追加しない（ブランドロゴのみ例外）。
