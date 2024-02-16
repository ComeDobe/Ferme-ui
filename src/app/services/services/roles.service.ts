/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findAll2 } from '../fn/roles/find-all-2';
import { FindAll2$Params } from '../fn/roles/find-all-2';
import { findById2 } from '../fn/roles/find-by-id-2';
import { FindById2$Params } from '../fn/roles/find-by-id-2';
import { RoleDto } from '../models/role-dto';

@Injectable({ providedIn: 'root' })
export class RolesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findById2()` */
  static readonly FindById2Path = '/roles/{roleId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2$Response(params: FindById2$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
    return findById2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2(params: FindById2$Params, context?: HttpContext): Observable<RoleDto> {
    return this.findById2$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleDto>): RoleDto => r.body)
    );
  }

  /** Path part for operation `findAll2()` */
  static readonly FindAll2Path = '/roles/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: FindAll2$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoleDto>>> {
    return findAll2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2(params?: FindAll2$Params, context?: HttpContext): Observable<Array<RoleDto>> {
    return this.findAll2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RoleDto>>): Array<RoleDto> => r.body)
    );
  }

}
