import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForVsFor } from './ng-for-vs-for';

describe('NgForVsFor', () => {
  let component: NgForVsFor;
  let fixture: ComponentFixture<NgForVsFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForVsFor],
    }).compileComponents();

    fixture = TestBed.createComponent(NgForVsFor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
