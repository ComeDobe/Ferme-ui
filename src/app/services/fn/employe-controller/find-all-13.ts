/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EmployeDto } from '../../models/employe-dto';

export interface FindAll13$Params {
}

export function findAll13(http: HttpClient, rootUrl: string, params?: FindAll13$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EmployeDto>>> {
  const rb = new RequestBuilder(rootUrl, findAll13.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<EmployeDto>>;
    })
  );
}

findAll13.PATH = '/employes/';
