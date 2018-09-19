import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomInputTextComponent } from '../atom-input-text/atom-input-text.component';
import { AtomButtonComponent } from '../atom-button/atom-button.component';
import { MoleculesComponent } from './molecules.component';

describe('MoleculesComponent', () => {
  let component: MoleculesComponent;
  let fixture: ComponentFixture<MoleculesComponent>;

  let buttonComponent: MoleculesComponent;
  let buttonFixture: ComponentFixture<AtomButtonComponent>;

  let inputComponent: MoleculesComponent;
  let inputFixture: ComponentFixture<AtomInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomInputTextComponent, AtomButtonComponent, MoleculesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleculesComponent);
    component = fixture.componentInstance;

    buttonFixture = TestBed.createComponent(AtomButtonComponent);
    buttonComponent = buttonFixture.componentInstance;

    inputFixture = TestBed.createComponent(AtomInputTextComponent);
    inputComponent = inputFixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('AtomButtonComponent DOM TEST', () => {
    // DOMチェック
    expect(buttonComponent).toBeDefined();
  });

  it('AtomButtonComponent click checked', () => {
    // イベント呼び出しチェック
    const comp = new AtomButtonComponent();
    comp.onClick();
  });

  it('AtomInputTextComponent DOM TEST', () => {
    // DOMチェック
    expect(inputComponent).toBeDefined();
  });

});
