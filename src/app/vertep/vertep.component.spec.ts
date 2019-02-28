import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertepComponent } from './vertep.component';

describe('VertepComponent', () => {
  let component: VertepComponent;
  let fixture: ComponentFixture<VertepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
