/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoleDto } from '../../models/role-dto';

export interface FindById2$Params {
  roleId: number;
}

export function findById2(http: HttpClient, rootUrl: string, params: FindById2$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
  const rb = new RequestBuilder(rootUrl, findById2.PATH, 'get');
  if (params) {
    rb.path('roleId', params.roleId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RoleDto>;
    })
  );
}

findById2.PATH = '/roles/{roleId}';
