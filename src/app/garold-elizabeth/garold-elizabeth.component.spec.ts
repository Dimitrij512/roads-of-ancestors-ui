import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaroldElizabethComponent } from './garold-elizabeth.component';

describe('GaroldElizabethComponent', () => {
  let component: GaroldElizabethComponent;
  let fixture: ComponentFixture<GaroldElizabethComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaroldElizabethComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaroldElizabethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
