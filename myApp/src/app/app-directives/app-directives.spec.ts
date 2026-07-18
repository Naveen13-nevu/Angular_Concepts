import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDirectives } from './app-directives';

describe('AppDirectives', () => {
  let component: AppDirectives;
  let fixture: ComponentFixture<AppDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDirectives],
    }).compileComponents();

    fixture = TestBed.createComponent(AppDirectives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
