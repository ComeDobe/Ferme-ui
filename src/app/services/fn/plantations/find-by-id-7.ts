/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlantationDto } from '../../models/plantation-dto';

export interface FindById7$Params {
  plantationId: number;
}

export function findById7(http: HttpClient, rootUrl: string, params: FindById7$Params, context?: HttpContext): Observable<StrictHttpResponse<PlantationDto>> {
  const rb = new RequestBuilder(rootUrl, findById7.PATH, 'get');
  if (params) {
    rb.path('plantationId', params.plantationId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PlantationDto>;
    })
  );
}

findById7.PATH = '/plantations/{plantationId}';
