import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DovbankaComponent } from './dovbanka.component';

describe('DovbankaComponent', () => {
  let component: DovbankaComponent;
  let fixture: ComponentFixture<DovbankaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DovbankaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DovbankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
