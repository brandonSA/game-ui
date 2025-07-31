import { createReducer, on } from '@ngrx/store';
import { GameConfig } from '../../../api-client';
import * as GameControllerActions from '../actions/game-controller.actions';
import { GameResult } from '../../shared/models/GameResult';

export interface GameControllerState {
  gameConfig: GameConfig;
  gameResults: GameResult[];
}

export const initialGameControllerState: GameControllerState = {
  gameConfig: {
    numberOfGames: 0,
    gameChoices: [],
  },
  gameResults: [],
};

export const gameControllerReducer = createReducer(
  initialGameControllerState,
  on(GameControllerActions.getGameConfigSuccess, (state, { gameConfig }) => ({
    ...state,
    gameConfig,
  })),
  on(GameControllerActions.postTurnSuccess, (state, { postTurnResponse }) => ({
    ...state,
    gameResults: [
      ...state.gameResults,
      {
        gameNumber: postTurnResponse.turnNumber,
        playerChoice: postTurnResponse.userSelection,
        serverChoice: postTurnResponse.serverSelection,
        gameResult: postTurnResponse.gameResult,
      },
    ],
  }))
);
