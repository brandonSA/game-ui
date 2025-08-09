import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { gameControllerReducer } from './store/reducers/game-controller.reducers';
import { provideEffects } from '@ngrx/effects';
import { GameControllerEffects } from './store/effects/game-controller.effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { sharedReducer } from './store/reducers/shared.reducers';
import { loadingInterceptor } from './shared/interceptor/loading/loading';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loadingInterceptor])),
    provideStore({
      gameController: gameControllerReducer,
      shared: sharedReducer,
    }),
    provideEffects(GameControllerEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: true,
    }),
  ],
};
