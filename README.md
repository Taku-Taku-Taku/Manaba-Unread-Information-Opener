# Manaba Unread Information Opener

![GitHub license](https://img.shields.io/github/license/Taku-Taku-Taku/Manaba-Unread-Information-Opener)
![Chrome Extension](https://img.shields.io/badge/chrome-extension-green)

Manabaの「未読のお知らせ」をワンクリックで**別タブで一括で開く**Chrome拡張機能です。  
立命館大学の学生向けに作られています。

---

## 📌 機能概要

- `https://ct.ritsumei.ac.jp/ct/home_announcement_publist` にアクセス
- 未読のお知らせ（クラス `news-title newsentry unread`）を検出
- 対象リンクを**自動で新しいタブで開く**

---

## ⚠️ 注意事項（免責）

この拡張機能は**立命館大学 非公式・非公認**であり、**作者自身の個人利用のために作成されたもの**です。  
使用は**自己責任**でお願いいたします。

> この拡張機能を使用したことにより生じたいかなる損害についても、作者は一切の責任を負いません。
---

## 🖱️ インストール方法（Releaseページから）

1. [Releases](https://github.com/Taku-Taku-Taku/Manaba-Unread-Information-Opener/releases) ページにアクセス
2. 最新バージョンの `.zip` ファイルをダウンロード
3. 任意のフォルダに展開（解凍）
4. Chrome で `拡張機能を管理`または`chrome://extensions/` を開く
5. 「デベロッパーモード」を ON にする
6. 「パッケージ化されていない拡張機能を読み込む」をクリックし、展開したフォルダを指定

---

## 🚀 使い方

1. Manaba にログインし、[お知らせ一覧ページ](https://ct.ritsumei.ac.jp/ct/home_announcement_publist) を開く
2. Chromeツールバーの拡張機能アイコン（📢）をクリック
3. 未読のお知らせが別タブで自動的に開かれます！
4. 開いたタブに移動し、ctrl+w(windowsの場合)を使ってタブを閉じていくと、どんどん未読のお知らせに移動していきます！
※実はコースニュースを開くのにも使用できます！


---

## 📂 ファイル構成
```
. 
├── background.js # 拡張機能ボタン押下時の処理 
├── content.js # ページ内で未読リンクを開くスクリプト 
├── manifest.json # 拡張機能の設定 
├── LICENSE 
└── README.md
```

---

## 📝 ライセンス

この拡張機能は [MIT License](LICENSE) のもとで公開されています。

---

## 🤝 Contributions Welcome!

バグ報告や改善提案など、Pull Request / Issue 大歓迎です！
