import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as SharedActions from '../../../../store/actions/shared.actions';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-languge-switcher',
  imports: [MatSelectModule],
  templateUrl: './languge-switcher.html',
  styleUrl: './languge-switcher.css',
})
export class LangugeSwitcher {
  @Input() set selectedLanguage(sl: string | null) {
    if (sl) {
      this.translate.setFallbackLang(sl);
      this.translate.use(sl);
      this.currentLanguage = sl;
    }
  }

  private translate = inject(TranslateService);

  languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  currentLanguage: string = 'en';

  constructor(private store: Store) {
    this.translate.addLangs(this.languages.map((lang) => lang.code));
  }

  switchLanguage(languageCode: string): void {
    this.store.dispatch(
      SharedActions.setSelectedLanguage({ languageCode: languageCode })
    );
  }

  getFlagIcon(languageCode: string): string {
    const language = this.languages.find((lang) => lang.code === languageCode);
    return language ? language.flag : '';
  }
}
