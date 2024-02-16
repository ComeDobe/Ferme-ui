/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface Delete12$Params {
  employeId: number;
}

export function delete12(http: HttpClient, rootUrl: string, params: Delete12$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, delete12.PATH, 'delete');
  if (params) {
    rb.path('employeId', params.employeId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

delete12.PATH = '/employes/{employeId}';
