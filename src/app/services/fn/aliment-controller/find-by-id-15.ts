/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AlimentDto } from '../../models/aliment-dto';

export interface FindById15$Params {
  alimentId: number;
}

export function findById15(http: HttpClient, rootUrl: string, params: FindById15$Params, context?: HttpContext): Observable<StrictHttpResponse<AlimentDto>> {
  const rb = new RequestBuilder(rootUrl, findById15.PATH, 'get');
  if (params) {
    rb.path('alimentId', params.alimentId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AlimentDto>;
    })
  );
}

findById15.PATH = '/aliments/{alimentId}';
