import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodiaComponent } from './lodia.component';

describe('LodiaComponent', () => {
  let component: LodiaComponent;
  let fixture: ComponentFixture<LodiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
