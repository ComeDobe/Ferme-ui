/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface Delete13$Params {
  animalId: number;
}

export function delete13(http: HttpClient, rootUrl: string, params: Delete13$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, delete13.PATH, 'delete');
  if (params) {
    rb.path('animalId', params.animalId, {});
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

delete13.PATH = '/animales/{animalId}';
