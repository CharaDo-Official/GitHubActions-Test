### 0 環境
#### 0.1 開発環境
- Windows 11  
  - VSCode  
 
#### 0.2 入れたツール
- VSCode上で完結
  - Volta
  - Node.js
  - npm
  - TypeScript
  - Vite
  - React
- Windowsにインストール
　- winget
  - Rust
  - Visual Studio Build Tools 2022
  - WebView2 Runtime

### 1 TypeScript導入まで
#### 1.1 Volta 
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

#### 1.2 Node,npm
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

==ここからtypescript-demoディレクトリを作成してそこで作業==  

#### 1.3 TypeScript
##### 1.3.1 導入
依存パッケージをインストールするための下準備
- `npm init -y`

TypeScriptをプロジェクトディレクトリに入れる  
- `npm install --save-dev typescript`  
  - node_modules

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

作成  
- ./typescript-demo/index.html  
- ./typescript-demo/src/main.ts  

実行  
- `npx vite` (typescript-demoディレクトリで行ってください)  

==新しくプロジェクトディレクトリ直下にreact-demoディレクトリを作成して、その中で作業==  
==その際、./react-demo/frontにおいて1.3.1の導入作業をやり直しています==

### 2 TypeScript + React + Tauri 導入まで
#### 2.1 React
##### 2.1.1 導入  
Reactを入れる  
- `npm install react react-dom`  
- `npm install --save-dev @types/react @types/react-dom @vitejs/plugin-react`  
  - node_modules

##### 2.1.2 チュートリアル
公式ドキュメント
- https://ja.react.dev/

.tsと.tsxの違い
- https://note.com/happy_avocet7237/n/n8f7893ccda84  
  - .ts : TypeScript  
  - .tsx : TypeScript+JSX(Reactを使う際に必要)  

作成
- ./tauri-demo/front/index.html
- ./tauri-demo/front/src/main.tsx
- ./tauri-demo/front/src/TodoApp.tsx

変更
- ./tauri-demo/front/tsconfig.json <-あまりにもエラーが出た

実行  
- `npm run dev` (tauri-demo/srcディレクトリで行ってください)  

#### 2.2 tauri
##### 2.2.1 前提
Windows上に必要な前提ツールをインストール

- winget
  - `$progressPreference = 'silentlyContinue'`  
  - `Write-Host "Installing WinGet PowerShell module from PSGallery..."`  
  - `Install-PackageProvider -Name NuGet -Force | Out-Null`  
  - `Install-Module -Name Microsoft.WinGet.Client -Force -Repository PSGallery | Out-Null`  
  - `Write-Host "Using Repair-WinGetPackageManager cmdlet to bootstrap WinGet..."`  
  - `Repair-WinGetPackageManager -AllUsers`  
  - `Write-Host "Done."`  

- Rust
  - `winget install -e --id Rustlang.Rust.MSVC`
  - `rustup toolchain install stable-x86_64-pc-windows-msvc`
  - `rustup default stable-x86_64-pc-windows-msvc`

- Visual Studio Build Tools 2022
  - `winget install -e --id Microsoft.VisualStudio.2022.BuildTools`

- WebView2 Runtime
  - `winget install -e --id Microsoft.EdgeWebView2Runtime`

パスどおし
- Rust
  - Rustの公式インストーラを使ったほうが楽  
- cl(MSVC C/C++ コンパイラ)
  - https://qiita.com/javacommons/items/37ec9429a60db20658e2 (clが通るらしい)
- link(MSVC C/C++ リンカ)
  - 通ってたか、clで一緒に通った

動作確認
`rustup -v`
`rustc -v`
`cargo -v`
`cl`
`link`


==ここからはプロジェクトルートで作業==

##### 2.2.2 導入
依存パッケージをインストールするための下準備
- `npm install -y`

Tauriを入れる
- `npm install --save-dev @tauri-apps/cli`
- `npm --prefix ./front i @tauri-apps/api`
- `npx tauri init`
  - ? What is your app name? › tauri-demo
  - ? What should the window title be? › tauri-demo
  - ? Where are your web assets (HTML/CSS/JS) located, relative to the "\<current dir\>/src-tauri/tauri.conf.json" file that will be created? > ./front/dist
  - ? What is the url of your dev server? › http://localhost:5173
  - ? What is your frontend dev command? › npm run dev --prefix ./front
  - ? What is your frontend build command? · npm run build --prefix ./front

プロジェクトルートにできたpackage.jsonに以下があるか確認
`"scripts": {`
  `"tauri:dev": "tauri dev",`
  `"tauri:build": "tauri build",`
  `"dev:front": "npm run dev --prefix front",`
  `"build:front": "npm run build --prefix front"`
`},`

気合でエラーを直して通す、あとはnpm run /<scriptsのエイリアス/>で実行
- npm run tauri:dev