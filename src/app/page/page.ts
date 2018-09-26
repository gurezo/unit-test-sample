export class Page {
  inputData: string;
  displayLabel: string;

  constructor(page: any) {
    this.inputData = page.inputData;
    this.displayLabel = page.displayLabel;
  }
}
