export interface GameResult {
  gameNumber: number;
  playerChoice: string;
  serverChoice: string;
  gameResult: 'Winner' | 'Loser' | 'Tie';
}
