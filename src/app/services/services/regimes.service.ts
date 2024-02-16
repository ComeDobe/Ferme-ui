/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete2 } from '../fn/regimes/delete-2';
import { Delete2$Params } from '../fn/regimes/delete-2';
import { findAll3 } from '../fn/regimes/find-all-3';
import { FindAll3$Params } from '../fn/regimes/find-all-3';
import { findById3 } from '../fn/regimes/find-by-id-3';
import { FindById3$Params } from '../fn/regimes/find-by-id-3';
import { RegimeDto } from '../models/regime-dto';
import { save2 } from '../fn/regimes/save-2';
import { Save2$Params } from '../fn/regimes/save-2';

@Injectable({ providedIn: 'root' })
export class RegimesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll3()` */
  static readonly FindAll3Path = '/regimes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3$Response(params?: FindAll3$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RegimeDto>>> {
    return findAll3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3(params?: FindAll3$Params, context?: HttpContext): Observable<Array<RegimeDto>> {
    return this.findAll3$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RegimeDto>>): Array<RegimeDto> => r.body)
    );
  }

  /** Path part for operation `save2()` */
  static readonly Save2Path = '/regimes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2$Response(params: Save2$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2(params: Save2$Params, context?: HttpContext): Observable<number> {
    return this.save2$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById3()` */
  static readonly FindById3Path = '/regimes/{regimeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3$Response(params: FindById3$Params, context?: HttpContext): Observable<StrictHttpResponse<RegimeDto>> {
    return findById3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3(params: FindById3$Params, context?: HttpContext): Observable<RegimeDto> {
    return this.findById3$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegimeDto>): RegimeDto => r.body)
    );
  }

  /** Path part for operation `delete2()` */
  static readonly Delete2Path = '/regimes/{regimeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: Delete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: Delete2$Params, context?: HttpContext): Observable<void> {
    return this.delete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
