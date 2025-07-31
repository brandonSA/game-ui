import { Component, Input } from '@angular/core';
import { GameConfig, GameTurnRequest } from '../../../../api-client';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { postTurn } from '../../../store/actions/game-controller.actions';

@Component({
  selector: 'app-game-screen',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './game-screen.html',
  styleUrl: './game-screen.css',
})
export class GameScreen {
  @Input() set gameConfig(gc: GameConfig | null) {
    console.warn('GameConfig is set:', gc);
    this.gameOptions = gc?.gameChoices || [];
    this.numberOfGames = gc?.numberOfGames || 0;
  }

  gameOptions: GameConfig['gameChoices'] = [];
  numberOfGames: number = 0;

  constructor(private readonly store: Store) {}

  postTurn(gameChoice: GameTurnRequest['userSelection']): void {
    this.store.dispatch(
      postTurn({
        postTurnData: {
          requestBody: {
            turnNumber: 1,
            userSelection: gameChoice,
          },
        },
      })
    );
  }
}
