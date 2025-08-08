import { createAction, props } from '@ngrx/store';
import {
  GameConfig,
  PostTurnData,
  PostTurnResponse,
} from '../../../api-client';

export const getGameConfig = createAction('[Game Controller] Get Game Config');
export const getGameConfigSuccess = createAction(
  '[Game Controller] Get Game Config Success',
  (gameConfig: GameConfig) => ({ gameConfig })
);
export const getGameConfigFailure = createAction(
  '[Game Controller] Get Game Config Failure',
  (error: string) => ({ error })
);

export const postTurn = createAction(
  '[Game Controller] Post Turn',
  props<{ postTurnData: PostTurnData }>()
);
export const postTurnSuccess = createAction(
  '[Game Controller] Post Turn Success',
  (postTurnResponse: PostTurnResponse) => ({ postTurnResponse })
);
export const postTurnFailure = createAction(
  '[Game Controller] Post Turn Failure',
  (error: string) => ({ error })
);

export const resetGameResults = createAction(
  '[Game Controller] Reset Game Results'
);
