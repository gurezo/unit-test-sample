import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { DebugElement, ElementRef } from '@angular/core';
// import { By } from '@angular/platform-browser';

import { AtomButtonComponent } from './atom-button.component';

describe('AtomButtonComponent', () => {
  let component: AtomButtonComponent;
  let fixture: ComponentFixture<AtomButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomButtonComponent);
    component = fixture.componentInstance;
  });

  it('DOM TEST', () => {
    // DOMチェック
    expect(component).toBeDefined();
  });

  it('click checked', () => {
    // イベント呼び出しチェック
    const comp = new AtomButtonComponent();
    comp.onClick();
  });

  it('click emit checked', () => {
    // イベント emit チェック
    const comp = new AtomButtonComponent();
    // comp.clickEvent.subscribe(value => {
    //   expect(value).toBe(true);
    // });
    spyOn(component.clickEvent, 'emit');
    component.onClick();
    expect(component.clickEvent.emit).toHaveBeenCalled();
    expect(component.clickEvent.emit).toHaveBeenCalledWith(true);
  });
});
