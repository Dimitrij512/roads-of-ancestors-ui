import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrankivskGalichComponent } from './frankivsk-galich.component';

describe('FrankivskGalichComponent', () => {
  let component: FrankivskGalichComponent;
  let fixture: ComponentFixture<FrankivskGalichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrankivskGalichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrankivskGalichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
