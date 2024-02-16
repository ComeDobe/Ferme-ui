/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlantationDto } from '../../models/plantation-dto';

export interface FindAll7$Params {
}

export function findAll7(http: HttpClient, rootUrl: string, params?: FindAll7$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PlantationDto>>> {
  const rb = new RequestBuilder(rootUrl, findAll7.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PlantationDto>>;
    })
  );
}

findAll7.PATH = '/plantations/';
