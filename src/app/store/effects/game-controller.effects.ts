import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameController } from '../../../api-client';
import * as GameControllerActions from '../actions/game-controller.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class GameControllerEffects {
  private actions$ = inject(Actions);
  private gameControllerService = inject(GameController);

  getConfig$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GameControllerActions.getGameConfig),
      mergeMap(() =>
        this.gameControllerService.getConfig().pipe(
          map((gameConfig) =>
            GameControllerActions.getGameConfigSuccess(gameConfig)
          ),
          catchError(() =>
            of(
              GameControllerActions.getGameConfigFailure(
                'Failed to load game config'
              )
            )
          )
        )
      )
    );
  });
}
