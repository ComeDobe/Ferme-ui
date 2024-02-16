/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MaterielDto } from '../../models/materiel-dto';

export interface FindAll9$Params {
}

export function findAll9(http: HttpClient, rootUrl: string, params?: FindAll9$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MaterielDto>>> {
  const rb = new RequestBuilder(rootUrl, findAll9.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MaterielDto>>;
    })
  );
}

findAll9.PATH = '/materiels/';
