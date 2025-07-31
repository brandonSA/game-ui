import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameController } from '../../../api-client';
import * as GameControllerActions from '../actions/game-controller.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class GameControllerEffects {
  private actions$ = inject(Actions);
  private gameControllerService = inject(GameController);

  constructor(private ngbModal: NgbModal) {}

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

  postTurn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GameControllerActions.postTurn),
      mergeMap((action) =>
        this.gameControllerService.postTurn(action.postTurnData).pipe(
          map((postTurnResponse) =>
            GameControllerActions.postTurnSuccess(postTurnResponse)
          ),
          tap((postTurnResponse) => {
            this.ngbModal.open(postTurnResponse.postTurnResponse.gameResult);
          }),
          catchError(() =>
            of(GameControllerActions.postTurnFailure('Failed to post turn'))
          )
        )
      )
    );
  });
}
