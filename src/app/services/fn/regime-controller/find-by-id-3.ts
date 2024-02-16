/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegimeDto } from '../../models/regime-dto';

export interface FindById3$Params {
  regimeId: number;
}

export function findById3(http: HttpClient, rootUrl: string, params: FindById3$Params, context?: HttpContext): Observable<StrictHttpResponse<RegimeDto>> {
  const rb = new RequestBuilder(rootUrl, findById3.PATH, 'get');
  if (params) {
    rb.path('regimeId', params.regimeId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegimeDto>;
    })
  );
}

findById3.PATH = '/regimes/{regimeId}';
