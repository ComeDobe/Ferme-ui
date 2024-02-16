/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MaterielDto } from '../../models/materiel-dto';

export interface FindById9$Params {
}

export function findById9(http: HttpClient, rootUrl: string, params?: FindById9$Params, context?: HttpContext): Observable<StrictHttpResponse<MaterielDto>> {
  const rb = new RequestBuilder(rootUrl, findById9.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MaterielDto>;
    })
  );
}

findById9.PATH = '/materiels/{mterielId}';
