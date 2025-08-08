import { Component, Input } from '@angular/core';
import { GameConfig, GameTurnRequest } from '../../../../api-client';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import {
  postTurn,
  resetGameResults,
} from '../../../store/actions/game-controller.actions';
import { GameResult } from '../../../shared/models/GameResult';

@Component({
  selector: 'app-game-screen',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './game-screen.html',
  styleUrl: './game-screen.css',
})
export class GameScreen {
  @Input() set gameConfig(gc: GameConfig | null) {
    if (gc) {
      this.gameOptions = gc.gameChoices;
      this.numberOfGames = gc.numberOfGames;
      this.gameOver = false;
    }
  }

  @Input() set gameResults(results: GameResult[] | null) {
    this.gameNumber = results?.length ? results?.length + 1 : 1;

    if (results?.length === this.numberOfGames) {
      this.gameOver = true;

      const winnerCount = results.filter(
        (r) => r.gameResult === 'Winner'
      ).length;
      const loserCount = results.filter((r) => r.gameResult === 'Loser').length;

      if (winnerCount >= 2) {
        this.gameOverResult = 'Winner';
      } else if (loserCount >= 2) {
        this.gameOverResult = 'Loser';
      } else {
        this.gameOverResult = 'Tie';
      }
    } else {
      this.gameOver = false;
    }
  }

  gameOptions: GameConfig['gameChoices'] = [];
  numberOfGames: number = 0;
  gameNumber: number = 0;
  gameOver: boolean = false;
  gameOverResult: string = '';

  constructor(private readonly store: Store) {}

  postTurn(gameChoice: GameTurnRequest['userSelection']): void {
    this.store.dispatch(
      postTurn({
        postTurnData: {
          requestBody: {
            turnNumber: this.gameNumber,
            userSelection: gameChoice,
          },
        },
      })
    );
  }

  restartGame(): void {
    this.store.dispatch(resetGameResults());
  }
}
