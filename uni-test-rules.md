### swagger
- swagger.ymlで、自動生成されたコードはユニットテスト対象外とする
- 但し、自動生成されたAPIをコールするサービスは対象

### Atoms, Meleocues, Organism コンポーネント
- ユニットテスト実行に必要なモジュールを `*.spec.ts` に実装する。
  - 実装内容はDOM生成チェック
  - データ反映
  - 各種メソッド・関数の実施確認
- 

### service
- ユニットテスト実行に必要なモジュールを `*.spec.ts` に実装する。
- Observableなオブジェクト（point）を作って、変更があるとSubscribeしている全てに変更を通知する
- pointに新しい値をpushしています。
- 実装している画面のコンポーネントに依存せずに単体で、行うこと。


### pipe
- ユニットテスト実行に必要なモジュールを `*.spec.ts` に実装する。
- Pipeは単純なclassであるため、テストクラス内でインスタンスを生成してテストを行う。
- Angularの特別なツールを使わず、JasmineならJasmine, MochaならMochaをそのまま使用し、実装する

### directive
- ユニットテスト実行に必要なモジュールを `*.spec.ts` に実装する。

### page, template コンポーネント
- UI操作的なテストは、E2Eテストになるので、対象外とする

### 別枠：console.logの除去
- [Stripping all comments and console.logs with ng build --prod, possible?](https://stackoverflow.com/questions/42307317/stripping-all-comments-and-console-logs-with-ng-build-prod-possible)
