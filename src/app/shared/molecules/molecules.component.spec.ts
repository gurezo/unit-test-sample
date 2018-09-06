import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomInputTextComponent } from '../atom-input-text/atom-input-text.component';
import { AtomButtonComponent } from '../atom-button/atom-button.component';
import { MoleculesComponent } from './molecules.component';

describe('MoleculesComponent', () => {
  let component: MoleculesComponent;
  let fixture: ComponentFixture<MoleculesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomInputTextComponent, AtomButtonComponent, MoleculesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
