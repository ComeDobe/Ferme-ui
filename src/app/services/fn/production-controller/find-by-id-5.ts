/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductionDto } from '../../models/production-dto';

export interface FindById5$Params {
  productionId: number;
}

export function findById5(http: HttpClient, rootUrl: string, params: FindById5$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductionDto>> {
  const rb = new RequestBuilder(rootUrl, findById5.PATH, 'get');
  if (params) {
    rb.path('productionId', params.productionId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductionDto>;
    })
  );
}

findById5.PATH = '/productions/{productionId}';
