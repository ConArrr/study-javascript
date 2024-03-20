# JS Primer

## プロジェクトの使い方

### ajaxapp（非同期処理プロジェクト）

#### 起動

```sh
cd ajaxapp
npx --yes @js-primer/local-server
```

## JavaScript

### 同期処理と非同期処理

#### 同期処理のデメリット

JavaScript処理はブラウザのメインスレッドで行われる。
メインスレッドは画面描画も行っているため、JavaScript処理でスレッドを占有してしまうと、画面描画がフリーズする。

非同期処理もメインスレッドで実行されるが、同タイミングの同期処理の合間を縫って実行される。

#### 非同期処理の注意点

- try-catch では例外キャッチできない

非同期処理をtryで囲っても、実際は実行登録されるだけで実行自体はtry句の外となる。
そのため、コールバック関数内でtry-catchを行うか、非同期処理の例外情報を外に通知する必要がある。

非同期処理の例外情報を扱う方法は主に以下となる。

- [Promise](#promise)
- [Async Function](#async-function)

#### Promise

非同期処理から返却されるインスタンス。
以下で成功/失敗時に呼び出される処理をコールバック関数として登録が可能。

- 成功：then()
- 失敗：catch()

##### Promise の状態

- Fulfilled
  - resolve（成功）したときの状態。
- Rejected
  - reject（失敗）または例外が発生したときの状態。
- Pending
  - FulfilledまたはRejectedではない状態
  - new Promiseでインスタンスを作成したときの初期状態
  
```sh
# 状態遷移
Pending -> Fulfilled  # 成功
        -> Rejected   # 失敗
```

#### Async Function

async function

## npm - パッケージ管理

### npx

npmで公開されているパッケージのインストールと実行をまとめて行える

### ローカルインストールとグローバルインストール

- ローカルインストール
特定プロジェクトのnode_modulesにインストールされる。
自動でパスは通らないため、任意ディレクトリからのコマンド実行は不可。

- グローバルインストール
コンピュータに対してインストールされるため、任意ディレクトリからコマンド実行が可能。
以下でグローバルインストールされたパッケージが格納される。

```sh
npm list -g
```

### npm コマンド

```sh
# install
npm i <package>

# uninstall
npm rm <package>

# uninstall (global)
npm rm -g <package>

# list
npm list

# list (global)
npm list -g
```
