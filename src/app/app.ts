import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Loader } from './shared/components/loader/loader';
import { Observable, of } from 'rxjs';
import { LoadingState } from './shared/models/Loader';
import { selectLoadingState } from './store/selectors/shared.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('game-ui');

  loadingState$: Observable<LoadingState | null> = of(null);

  constructor(private store: Store) {
    this.loadingState$ = this.store.select(selectLoadingState);
  }
}
