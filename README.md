### 0 環境
#### 0.1 開発環境
- Windows 11  
  - VSCode  
 
#### 0.2 入れたツール
- Volta
- Node.js
- npm
- TypeScript
- Vite
- React


### 1 フロント 
#### 1.1 Nodeのバージョン管理  
バージョン管理アプリといってもいろいろあるらしい  
- https://qiita.com/tak8_al/items/791e8d032bdc13a135de  
  - Voltaでいくー  

Voltaをいれていくー  
- .msiをダウンロード  
  - https://github.com/volta-cli/volta/releases/v2.0.2  
  - volta-2.0.2-windows-x86_64.msi  
- .msi実行  
- VSCode再起動  
- `volta --version`  
  - 2.0.2  

== このへんからfrontディレクトリでやったほうがいいかも==  

#### 1.2 Node,npmをいれよー
node-20.18.0くんがいましたが、アンストしました  
- 「インストールされているアプリ」から削除  
- `rd /s /q "C:\Program Files\nodejs"`  
- `rd /s /q "%AppData%\npm"`  
- `rd /s /q "%AppData%\npm-cache"`  

Nodeをいれましょう、npmも自動で入るみたい  
- `volta install node`  
- `node --version`  
  - v22.19.0  
- `npm --version`  
  - 10.9.3  

#### 1.3 TypeScript
##### 1.3.1 導入
TypeScriptをプロジェクトディレクトリに入れる  
- `npm install --save-dev typescript`  
  - package.jsonが追加される  

tsconfig.jsonを初期化(frontで)  
- `npx tsc --init`  
  - tsconfig.jsonが追加される    

速い開発サーバ＋本番ビルド用にViteを入れる  
- `npm install --save-dev vite`
  - Vite入れた瞬間にnode_modulesにバチくそパッケージはいって驚愕  

##### 1.3.2 チュートリアル
公式ドキュメント
- https://www.typescriptlang.org/docs/  

.tsと.tsxの違い
- https://note.com/happy_avocet7237/n/n8f7893ccda84  
  - .ts : TypeScript  
  - .tsx : TypeScript+JSX  

実作  
- ./index.html  
- ./src/main.ts  

実行  
- `npx vite`

#### 1.4 React
##### 1.4.1 導入 
Reactを入れる
- `npm install react react-dom`  
- `npm install --save-dev @types/react @types/react-dom` 