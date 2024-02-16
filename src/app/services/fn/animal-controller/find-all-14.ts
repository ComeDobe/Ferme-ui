/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AnimalDto } from '../../models/animal-dto';

export interface FindAll14$Params {
}

export function findAll14(http: HttpClient, rootUrl: string, params?: FindAll14$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AnimalDto>>> {
  const rb = new RequestBuilder(rootUrl, findAll14.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AnimalDto>>;
    })
  );
}

findAll14.PATH = '/animales/';
