import { Component, inject, Input } from '@angular/core';
import { GameConfig, GameTurnRequest } from '../../../../api-client';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { postTurn } from '../../../store/actions/game-controller.actions';
import { TranslateService } from '@ngx-translate/core';
import { GameResult } from '../../../shared/models/GameResult';

@Component({
  selector: 'app-game-screen',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './game-screen.html',
  styleUrl: './game-screen.css',
})
export class GameScreen {
  @Input() set gameConfig(gc: GameConfig | null) {
    console.warn('GameConfig is set:', gc);
    if (gc) {
      this.gameOptions = gc.gameChoices;
      this.numberOfGames = gc.numberOfGames;
      this.gameOver = false;
    }
  }

  @Input() set gameResults(results: GameResult[] | null) {
    console.warn('Game results are set:', results);
    this.gameNumber = results?.length ? results?.length + 1 : 1;

    if (results?.length === this.numberOfGames) {
      this.gameOver = true;
    }
  }

  private translate = inject(TranslateService);

  gameOptions: GameConfig['gameChoices'] = [];
  numberOfGames: number = 0;
  gameNumber: number = 0;
  gameOver: boolean = false;

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
}
