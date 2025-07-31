import { Component, Input } from '@angular/core';
import { GameConfig } from '../../../../api-client';

@Component({
  selector: 'app-game-screen',
  imports: [],
  templateUrl: './game-screen.html',
  styleUrl: './game-screen.css',
})
export class GameScreen {
  @Input() set gameConfig(gc: GameConfig | null) {
    console.warn('GameConfig is set:', gc);
    this.gameOptions = gc?.gameChoices || [];
    this.numberOfGames = gc?.numberOfGames || 0;
  }

  gameOptions: Array<string> = [];
  numberOfGames: number = 0;
}
