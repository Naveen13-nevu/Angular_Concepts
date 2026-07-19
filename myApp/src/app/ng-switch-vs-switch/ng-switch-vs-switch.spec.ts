import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchVsSwitch } from './ng-switch-vs-switch';

describe('NgSwitchVsSwitch', () => {
  let component: NgSwitchVsSwitch;
  let fixture: ComponentFixture<NgSwitchVsSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSwitchVsSwitch],
    }).compileComponents();

    fixture = TestBed.createComponent(NgSwitchVsSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
