import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatCredoComponent } from './boat-credo.component';

describe('BoatCredoComponent', () => {
  let component: BoatCredoComponent;
  let fixture: ComponentFixture<BoatCredoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatCredoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatCredoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
