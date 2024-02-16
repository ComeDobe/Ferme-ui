/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ParcelleDto } from '../../models/parcelle-dto';

export interface FindAll8$Params {
}

export function findAll8(http: HttpClient, rootUrl: string, params?: FindAll8$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ParcelleDto>>> {
  const rb = new RequestBuilder(rootUrl, findAll8.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ParcelleDto>>;
    })
  );
}

findAll8.PATH = '/parcelles/';
