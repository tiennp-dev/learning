import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '../../enum/language.enum';
import { LocalStorageEnum } from '../../enum/localstorage.enum';
import { LanguageItem } from '../../models/language.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLang: string = LanguageCode.en;
  languages: LanguageItem[] = [
    {
      code: LanguageCode.en, name: 'UI.Nav.English'
    },
    {
      code: LanguageCode.vi, name: 'UI.Nav.Vietnamese'
    }
  ];

  constructor(
    private translateService: TranslateService
  ) {
    this.currentLang = localStorage.getItem(LocalStorageEnum.Language) || LanguageCode.en;
  }

  changeLang(lang: string): void {
    localStorage.setItem(LocalStorageEnum.Language, lang);
    this.translateService.use(lang);
  }
}
