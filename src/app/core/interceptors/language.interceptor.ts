import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageEnum } from 'src/app/shared/enum/localstorage.enum';
import { LanguageCode } from 'src/app/shared/enum/language.enum';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const lang = localStorage.getItem(LocalStorageEnum.Language) || LanguageCode.en;

    request = request.clone({
      setHeaders: {
        'Accept-Language': lang
      }
    });
    return next.handle(request);
  }
}
