import { Component, Input } from '@angular/core';
import { GameResult } from '../../../shared/models/GameResult';
import { MatTableModule } from '@angular/material/table';
import { TranslatePipe } from '@ngx-translate/core';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-game-result-display',
  imports: [MatTableModule, TranslatePipe, LowerCasePipe],
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
