import { createAction, props } from '@ngrx/store';

export const setLoadingTrue = createAction(
  '[Shared] Set Loading True',
  props<{ loaderMessage: string }>()
);

export const setLoadingFalse = createAction('[Shared] Set Loading False');

export const setSelectedLanguage = createAction(
  '[Shared] Set Selected Language',
  props<{ languageCode: string }>()
);
