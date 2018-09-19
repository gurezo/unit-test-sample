### swagger
- swagger.ymlで、自動生成されたコードはユニットテスト対象外とする
- 但し、自動生成されたAPIをコールするサービスは対象

### Atoms, Meleocues, Organism コンポーネント
- ユニットテスト実行に必要なモジュールを `*.spec.ts` に実装する。
  - classテスト
  - DOMテスト
  - データバインドテスト

### model ts ファイル
- ユニットテスト実行に必要なモジュールを `*.spec.ts` に実装する。
  - メンバ変数のチェック
- Angularの特別なツールを使わず、JasmineならJasmine, MochaならMochaをそのまま使用し、実装する
  - ※ `*.spec.ts` を実装するだけで、テストを実行してくれる。

### service
- ユニットテスト実行に必要なモジュールを `*.spec.ts` に実装する。
- Observableなオブジェクト（point）を作って、変更があるとSubscribeしている全てに変更を通知する
- pointに新しい値をpushしています。
- 実装している画面のコンポーネントに依存せずに単体で、行うこと。

### pipe
- ユニットテスト実行に必要なモジュールを `*.spec.ts` に実装する。
- Pipeは単純なclassであるため、テストクラス内でインスタンスを生成してテストを行う。
- Angularの特別なツールを使わず、JasmineならJasmine, MochaならMochaをそのまま使用し、実装する
  - ※ `*.spec.ts` を実装するだけで、テストを実行してくれる。

### directive
- ユニットテスト実行に必要なモジュールを `*.spec.ts` に実装する。
- directiveは単純なclassであるため、テストクラス内でインスタンスを生成してテストを行う。
- Angularの特別なツールを使わず、JasmineならJasmine, MochaならMochaをそのまま使用し、実装する
  - ※ `*.spec.ts` を実装するだけで、テストを実行してくれる。

### page, template コンポーネント
- UI操作的なテストは、E2Eテストとするので、今回は対象外とする

### 別枠：console.logの除去
- [Stripping all comments and console.logs with ng build --prod, possible?](https://stackoverflow.com/questions/42307317/stripping-all-comments-and-console-logs-with-ng-build-prod-possible)
