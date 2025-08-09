import { Component, Input } from '@angular/core';
import { GameResult } from '../../../shared/models/GameResult';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-game-result-display',
  imports: [MatTableModule],
  templateUrl: './game-result-display.html',
  styleUrl: './game-result-display.css',
})
export class GameResultDisplay {
  @Input() set gameResults(results: GameResult[] | null) {
    this.dataSource = results || [];
  }

  displayedColumns: string[] = [
    'gameNumber',
    'playerSelection',
    'serverSelection',
    'result',
  ];
  dataSource: GameResult[] = [];
}
