/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MaintenanceDto } from '../../models/maintenance-dto';

export interface FindById10$Params {
}

export function findById10(http: HttpClient, rootUrl: string, params?: FindById10$Params, context?: HttpContext): Observable<StrictHttpResponse<MaintenanceDto>> {
  const rb = new RequestBuilder(rootUrl, findById10.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MaintenanceDto>;
    })
  );
}

findById10.PATH = '/maintenances/{maitenanceId}';
