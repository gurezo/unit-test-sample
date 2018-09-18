### swagger
- swagger.ymlで、自動生成されたコードはユニットテスト対象外とする
- 但し、自動生成されたAPIをコールするサービスは対象

### Atoms, Meleocues, Organism コンポーネント
- ユニットテスト実行に必要なモジュールを `*.spec.ts` に実装する。
  - 実装内容はDOM生成チェック
  - データ反映
  - 各種メソッド・関数の実施確認

### service
- Observableなオブジェクト（point）を作って、変更があるとSubscribeしている全てに変更を通知する
- pointに新しい値をpushしています。
- 実装している画面のコンポーネントに依存せずに単体で、行うこと。


### pipe


### page, template コンポーネント
- UI操作的なテストは、E2Eテストになるので、対象外とする

