import { createReducer, on } from '@ngrx/store';
import { LoadingState } from '../../shared/models/Loader';
import * as SharedActions from '../actions/shared.actions';

export interface SharedState {
  loadingState: LoadingState;
}

export const initialSharedState: SharedState = {
  loadingState: {
    isLoading: false,
    loadingMessage: '',
  },
};

export const sharedReducer = createReducer(
  initialSharedState,
  on(SharedActions.setLoadingTrue, (state, { loaderMessage }) => ({
    ...state,
    loadingState: {
      isLoading: true,
      loadingMessage: loaderMessage || '',
    },
  })),
  on(SharedActions.setLoadingFalse, (state) => ({
    ...state,
    loadingState: {
      isLoading: false,
      loadingMessage: '',
    },
  }))
);
