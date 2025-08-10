import { createReducer, on } from '@ngrx/store';
import { LoadingState } from '../../shared/models/Loader';
import * as SharedActions from '../actions/shared.actions';

export interface SharedState {
  loadingState: LoadingState;
  selectedLanguage: string;
}

export const initialSharedState: SharedState = {
  loadingState: {
    isLoading: false,
    loadingMessage: '',
  },
  selectedLanguage: 'en', // Default language
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
  })),
  on(SharedActions.setSelectedLanguage, (state, { languageCode }) => ({
    ...state,
    selectedLanguage: languageCode || 'en',
  }))
);
