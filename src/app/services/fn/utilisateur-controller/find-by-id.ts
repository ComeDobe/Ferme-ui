/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UtilisateurDto } from '../../models/utilisateur-dto';

export interface FindById$Params {
  utilisateurId: number;
}

export function findById(http: HttpClient, rootUrl: string, params: FindById$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
  const rb = new RequestBuilder(rootUrl, findById.PATH, 'get');
  if (params) {
    rb.path('utilisateurId', params.utilisateurId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UtilisateurDto>;
    })
  );
}

findById.PATH = '/utilisateurs/{utilisateurId}';
