import { createAction } from '@ngrx/store';
import { GameConfig } from '../../../api-client';

export const getGameConfig = createAction('[Game Controller] Get Game Config');
export const getGameConfigSuccess = createAction(
  '[Game Controller] Get Game Config Success',
  (gameConfig: GameConfig) => ({ gameConfig })
);
export const getGameConfigFailure = createAction(
  '[Game Controller] Get Game Config Failure',
  (error: string) => ({ error })
);
