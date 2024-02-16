/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlanteDto } from '../../models/plante-dto';

export interface FindById6$Params {
  planteId: number;
}

export function findById6(http: HttpClient, rootUrl: string, params: FindById6$Params, context?: HttpContext): Observable<StrictHttpResponse<PlanteDto>> {
  const rb = new RequestBuilder(rootUrl, findById6.PATH, 'get');
  if (params) {
    rb.path('planteId', params.planteId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PlanteDto>;
    })
  );
}

findById6.PATH = '/plantes/{planteId}';
