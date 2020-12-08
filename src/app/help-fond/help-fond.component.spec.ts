import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpFondComponent } from './help-fond.component';

describe('HelpFondComponent', () => {
  let component: HelpFondComponent;
  let fixture: ComponentFixture<HelpFondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpFondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
