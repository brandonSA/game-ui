import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameResultDisplay } from './game-result-display';

describe('GameResultDisplay', () => {
  let component: GameResultDisplay;
  let fixture: ComponentFixture<GameResultDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameResultDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameResultDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
