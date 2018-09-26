import { Page } from '@app/page/page';

const testPage = { 'inputData': 'test data', 'displayLabel': 'test Label' };

describe('Page Model Test', () => {
  it('Page value check', () => {
    const page = new Page(testPage);
    expect(page instanceof Page).toBe(true);
    expect(page.inputData).toContain('test data');
    expect(page.displayLabel).toContain('test Label');
  });
});
