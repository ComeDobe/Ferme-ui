/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AnimalDto } from '../../models/animal-dto';

export interface FindById14$Params {
  animalId: number;
}

export function findById14(http: HttpClient, rootUrl: string, params: FindById14$Params, context?: HttpContext): Observable<StrictHttpResponse<AnimalDto>> {
  const rb = new RequestBuilder(rootUrl, findById14.PATH, 'get');
  if (params) {
    rb.path('animalId', params.animalId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AnimalDto>;
    })
  );
}

findById14.PATH = '/animales/{animalId}';
