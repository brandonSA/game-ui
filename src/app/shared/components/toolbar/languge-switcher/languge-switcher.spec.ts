import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangugeSwitcher } from './languge-switcher';

describe('LangugeSwitcher', () => {
  let component: LangugeSwitcher;
  let fixture: ComponentFixture<LangugeSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangugeSwitcher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangugeSwitcher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
