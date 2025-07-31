import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameControllerState } from '../reducers/game-controller.reducers';

export const selectGameControlletState =
  createFeatureSelector<GameControllerState>('gameController');

export const selectGameConfig = createSelector(
  selectGameControlletState,
  (state: GameControllerState) => state.gameConfig
);

export const selectGameResults = createSelector(
  selectGameControlletState,
  (state: GameControllerState) => state.gameResults
);
