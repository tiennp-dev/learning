import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from './shared/enum/language.enum';
import { LocalStorageEnum } from './shared/enum/localstorage.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(LanguageCode.en);
    translate.use(localStorage.getItem(LocalStorageEnum.Language) || LanguageCode.en);
  }
}
