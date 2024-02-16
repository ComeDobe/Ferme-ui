/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ParcelleDto } from '../../models/parcelle-dto';

export interface FindById8$Params {
  parcelleId: number;
}

export function findById8(http: HttpClient, rootUrl: string, params: FindById8$Params, context?: HttpContext): Observable<StrictHttpResponse<ParcelleDto>> {
  const rb = new RequestBuilder(rootUrl, findById8.PATH, 'get');
  if (params) {
    rb.path('parcelleId', params.parcelleId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ParcelleDto>;
    })
  );
}

findById8.PATH = '/parcelles/{parcelleId}';
