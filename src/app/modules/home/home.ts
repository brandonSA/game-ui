import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as GameControllerActions from '../../store/actions/game-controller.actions';
import { Observable, of } from 'rxjs';
import { GameConfig } from '../../../api-client';
import { GameScreen } from './game-screen/game-screen';
import { AsyncPipe } from '@angular/common';
import {
  selectGameConfig,
  selectGameResults,
} from '../../store/selectors/game-controller.selectors';
import { GameResult } from '../../shared/models/GameResult';
import { GameResultDisplay } from './game-result-display/game-result-display';

@Component({
  selector: 'app-home',
  imports: [GameScreen, AsyncPipe, GameResultDisplay],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  gameConfig$: Observable<GameConfig | null> = of(null);
  gameResults$: Observable<GameResult[]> = of([]);

  constructor(private readonly store: Store) {
    this.gameConfig$ = store.select(selectGameConfig);
    this.gameResults$ = store.select(selectGameResults);
  }

  ngOnInit(): void {
    this.store.dispatch(GameControllerActions.getGameConfig());
  }
}
