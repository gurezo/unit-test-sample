### 前提条件
- Angular CLI で、生成された `*.spec.ts` にユニットテストを実装する。

### swagger
- swagger.ymlで、自動生成されたコードはユニットテスト対象外とする

### 対象ガバレッジ
- 単純条件カバレッジ(C2：条件網羅率)
- 関数カバレッジ

### pipe
- Pipeは、テストクラス内でインスタンスを生成してテストを行う。

### service
- 実装している画面のコンポーネントに依存せずに単体で、行うこと。
- 他のサービスとの依存がない場合は、インスタンスを生成してテストを行う。
- 他のサービスとの依存がある場合、下記のいずれかの方法でテストを行う。
  - 実際のサービスをInject
  - FakeサービスをInject
  - Fake objectをInject
  - Spy serviceをInject

### コンポーネント
- DOM関与なしでコンポーネントクラスだけのテスト
- DOMのテストは、コンポーネントを生成してテスト
- 入出力を伴うテスト(@Input/@Output)

### directive


### 別枠：console.logの除去
- [Stripping all comments and console.logs with ng build --prod, possible?](https://stackoverflow.com/questions/42307317/stripping-all-comments-and-console-logs-with-ng-build-prod-possible)
