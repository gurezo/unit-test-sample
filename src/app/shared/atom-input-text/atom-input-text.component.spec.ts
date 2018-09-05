import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomInputTextComponent } from './atom-input-text.component';

describe('AtomInputTextComponent', () => {
  let component: AtomInputTextComponent;
  let fixture: ComponentFixture<AtomInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
