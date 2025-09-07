# プロジェクト要件定義書

## プロジェクト概要

### プロジェクト名
**aboutme-nextjs** - Yuta Miuraの自己紹介ポートフォリオサイト

### プロジェクトの目的
開発者Yuta Miuraの技術スキルや経歴を紹介する個人ポートフォリオサイトの構築。レスポンシブデザインでデスクトップ・タブレット・モバイルの全デバイスに対応する。

### ターゲットユーザー
- 採用担当者
- 技術者・開発者
- ビジネスパートナー候補

## 技術仕様

### フレームワーク・ライブラリ
- **Next.js 15.3.3** (React 19.0.0ベース)
- **TypeScript** - 型安全性の確保
- **Tailwind CSS v4** - スタイリング
- **@opennextjs/cloudflare** - Cloudflareデプロイメント対応

### 開発・デプロイ環境
- **Node.js** (最新LTS推奨)
- **Cloudflare Workers** - ホスティング環境
- **Wrangler** - Cloudflare CLI ツール

### 主要機能

#### 1. レスポンシブデザイン対応
- CSS Grid/Flexboxによる柔軟なレイアウト
- Tailwind CSSブレークポイントによる画面サイズ対応
- モバイルファーストアプローチ

#### 2. プロフィール表示
- 個人情報（名前、職業）
- 技術スキル一覧
  - 言語: Java, TypeScript, JavaScript, Python3
  - フレームワーク: React, Next.js, Node.js
  - データベース: MySQL, PostgreSQL
  - ツール: Docker, Git, GitHub
  - Web技術: HTML, CSS
- 猫の写真表示（外部画像 yuta.p-codes.dev から取得）

## ディレクトリ構造

```
aboutme-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # アプリケーション全体レイアウト
│   │   ├── page.tsx          # ホームページコンポーネント
│   │   ├── globals.css       # グローバルスタイル
│   │   └── favicon.ico       # ファビコン
│   ├── components/
│   │   ├── Header.tsx        # ヘッダーコンポーネント
│   │   └── Footer.tsx        # フッターコンポーネント
│   └── hooks/                # カスタムフック（将来用）
├── docs/                     # プロジェクト文書
│   ├── README.md             # ドキュメント管理ガイド
│   └── PROJECT_REQUIREMENTS.md # プロジェクト要件定義書
├── public/                   # 静的ファイル
├── package.json              # 依存関係管理
├── next.config.ts            # Next.js設定
├── tsconfig.json             # TypeScript設定
├── wrangler.jsonc            # Cloudflare Workers設定
└── open-next.config.ts       # OpenNext Cloudflare設定
```

## コンポーネント仕様

### Layout (src/app/layout.tsx)
- **フォント**: Geist Sans, Geist Mono
- **メタデータ**: タイトル "Yuta's Profile", 説明 "Yutaの自己紹介ページ"
- **構造**: Header + Main Content + Footer
- **レスポンシブ**: 全画面サイズに対応したフレックスレイアウト

### Header (src/components/Header.tsx)
- サイトタイトル: "Yuta's Profile"
- 開発状況表示: "鋭意作成中"
- レスポンシブ対応: 画面幅5/6、最大幅screen-xl

### Footer (src/components/Footer.tsx)
- コピーライト表示: "© 2025 Yuta Miura"

### Home Page (src/app/page.tsx)
- **レイアウト**: レスポンシブ2カラム構成
  - デスクトップ: 左半分プロフィール・右半分写真
  - モバイル: 縦積みレイアウト
- **レスポンシブ対応**: Tailwind CSSクラスでブレークポイント制御
- **外部画像**: yuta.p-codes.dev ドメインからの画像読み込み

## 開発・デプロイメント

### 開発コマンド
```bash
npm run dev          # 開発サーバー起動（Turbopack使用）
npm run build        # プロダクションビルド
npm run lint         # ESLint実行
npm run cf-typegen   # Cloudflare型定義生成
```

### デプロイメントコマンド
```bash
npm run deploy       # Cloudflareにデプロイ
npm run preview      # プレビュー環境デプロイ
```

## 設定ファイル

### Next.js設定 (next.config.ts)
- 外部画像ドメイン許可: `yuta.p-codes.dev`
- OpenNext Cloudflare開発環境対応
- 画像最適化設定

## デザイン・UI要件

### カラーテーマ
- プライマリカラー: Tailwindデフォルト
- アクセントカラー: Tailwind標準カラーパレット

### レスポンシブブレークポイント
- モバイル: デフォルト
- タブレット: md以上
- デスクトップ: lg以上

### フォント
- メインフォント: Geist Sans
- コードフォント: Geist Mono

## 運用・保守

### パフォーマンス要件
- Next.js Image Optimizationの活用
- 外部画像の最適化
- Cloudflare Workersでの高速配信

### SEO対応
- メタデータ設定済み
- セマンティックHTML構造
- 適切な見出し階層

## 今後の拡張予定

### 機能追加候補
- ブログ機能
- プロジェクトポートフォリオ詳細
- お問い合わせフォーム
- 多言語対応
- ダークモード対応

### 技術的改善
- アニメーション・トランジション追加
- プログレッシブWebアプリ(PWA)対応
- パフォーマンス監視ツール導入

## 注意事項

### 開発時の留意点
1. TypeScriptの型安全性を重視
2. Tailwind CSSクラスの一貫性保持
3. コンポーネントの再利用性を考慮
4. アクセシビリティ対応
5. モバイルファーストアプローチ

### コードスタイル
- ESLint設定に準拠
- Next.js App Routerパターン採用
- 'use client'ディレクティブの適切な使用
- async/awaitパターンの活用

### セキュリティ
- 外部画像ドメインの制限
- CSP (Content Security Policy) 考慮
- XSS対策の実装 