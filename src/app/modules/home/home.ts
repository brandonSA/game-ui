import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as GameControllerActions from '../../store/actions/game-controller.actions';
import { Observable, of } from 'rxjs';
import { GameConfig } from '../../../api-client';
import { GameScreen } from './game-screen/game-screen';
import { AsyncPipe } from '@angular/common';
import { selectGameConfig } from '../../store/selectors/game-controller.selectors';

@Component({
  selector: 'app-home',
  imports: [GameScreen, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  gameConfig$: Observable<GameConfig | null> = of(null);

  constructor(private readonly store: Store) {
    this.gameConfig$ = store.select(selectGameConfig);
  }

  ngOnInit(): void {
    this.store.dispatch(GameControllerActions.getGameConfig());
  }
}
