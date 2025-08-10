import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SharedActions from '../../../store/actions/shared.actions';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private store: Store) {}
  show(loadingMessage?: string) {
    this.store.dispatch(
      SharedActions.setLoadingTrue({
        loaderMessage: loadingMessage || 'Loading...',
      })
    );
  }
  hide() {
    this.store.dispatch(SharedActions.setLoadingFalse());
  }
}
