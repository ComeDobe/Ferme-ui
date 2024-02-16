/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EmployeDto } from '../../models/employe-dto';

export interface FindById13$Params {
  employeId: number;
}

export function findById13(http: HttpClient, rootUrl: string, params: FindById13$Params, context?: HttpContext): Observable<StrictHttpResponse<EmployeDto>> {
  const rb = new RequestBuilder(rootUrl, findById13.PATH, 'get');
  if (params) {
    rb.path('employeId', params.employeId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EmployeDto>;
    })
  );
}

findById13.PATH = '/employes/{employeId}';
