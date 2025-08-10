import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Store } from '@ngrx/store';
import { LangugeSwitcher } from './languge-switcher/languge-switcher';
import { Observable, of } from 'rxjs';
import { selectLanguage } from '../../../store/selectors/shared.selectors';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, LangugeSwitcher, AsyncPipe, TranslatePipe],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  selectedLanguage$: Observable<string | null> = of(null);

  constructor(private store: Store) {
    this.selectedLanguage$ = this.store.select(selectLanguage);
  }
}
