import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameControllerState } from '../reducers/game-controller.reducers';

export const selectGameControllerState =
  createFeatureSelector<GameControllerState>('gameController');

export const selectGameConfig = createSelector(
  selectGameControllerState,
  (state: GameControllerState) => state.gameConfig
);

export const selectGameResults = createSelector(
  selectGameControllerState,
  (state: GameControllerState) => state.gameResults
);
