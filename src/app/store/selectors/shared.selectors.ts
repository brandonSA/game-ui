import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from '../reducers/shared.reducers';

export const selectSharedState = createFeatureSelector<SharedState>('shared');

export const selectLoadingState = createSelector(
  selectSharedState,
  (state: SharedState) => state.loadingState
);

export const selectLanguage = createSelector(
  selectSharedState,
  (state: SharedState) => state.selectedLanguage
);
