import { createReducer, on } from '@ngrx/store';
import { GameConfig } from '../../../api-client';
import * as GameControllerActions from '../actions/game-controller.actions';

export interface GameControllerState {
  gameConfig: GameConfig;
}

export const initialGameControllerState: GameControllerState = {
  gameConfig: {
    numberOfGames: 0,
    gameChoices: [],
  },
};

export const gameControllerReducer = createReducer(
  initialGameControllerState,
  on(GameControllerActions.getGameConfigSuccess, (state, { gameConfig }) => ({
    ...state,
    gameConfig,
  }))
);
