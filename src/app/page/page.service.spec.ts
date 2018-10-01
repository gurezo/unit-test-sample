import { TestBed, inject } from '@angular/core/testing';

import { PageService } from './page.service';

describe('PageService', () => {
  const testService = new PageService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageService]
    });
  });

  it('should be created', inject([PageService], (service: PageService) => {
    expect(service).toBeTruthy();
  }));

  it('method get test', () => {
    testService.get();
  });

  it('method post test', () => {
    testService.post();
  });
});
