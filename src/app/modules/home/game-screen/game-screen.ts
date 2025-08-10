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
import { TranslatePipe } from '@ngx-translate/core';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-game-screen',
  imports: [MatCardModule, MatButtonModule, TranslatePipe, LowerCasePipe],
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

    const winnerCount = results
      ? results.filter((r) => r.gameResult === 'Winner').length
      : 0;
    const loserCount = results
      ? results.filter((r) => r.gameResult === 'Loser').length
      : 0;
    const tieCount = results
      ? results.filter((r) => r.gameResult === 'Tie').length
      : 0;

    if (winnerCount >= this.numberOfGames - 1) {
      this.gameOverResult = 'Winner';
      this.gameOver = true;
    } else if (loserCount >= this.numberOfGames - 1) {
      this.gameOverResult = 'Loser';
      this.gameOver = true;
    } else if (
      tieCount >= this.numberOfGames - 1 ||
      results?.length === this.numberOfGames
    ) {
      this.gameOverResult = 'Tie';
      this.gameOver = true;
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
