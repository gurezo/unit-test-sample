import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismsComponent } from './organisms.component';

import { SharedModule } from '@shared/shared.module';

describe('OrganismsComponent', () => {
  let component: OrganismsComponent;
  let fixture: ComponentFixture<OrganismsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismsComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
