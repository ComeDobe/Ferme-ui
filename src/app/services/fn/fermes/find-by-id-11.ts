/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FermeDto } from '../../models/ferme-dto';

export interface FindById11$Params {
  fermeId: number;
}

export function findById11(http: HttpClient, rootUrl: string, params: FindById11$Params, context?: HttpContext): Observable<StrictHttpResponse<FermeDto>> {
  const rb = new RequestBuilder(rootUrl, findById11.PATH, 'get');
  if (params) {
    rb.path('fermeId', params.fermeId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FermeDto>;
    })
  );
}

findById11.PATH = '/fermes/{fermeId}';
