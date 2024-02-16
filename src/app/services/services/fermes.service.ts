/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete10 } from '../fn/fermes/delete-10';
import { Delete10$Params } from '../fn/fermes/delete-10';
import { FermeDto } from '../models/ferme-dto';
import { findAll11 } from '../fn/fermes/find-all-11';
import { FindAll11$Params } from '../fn/fermes/find-all-11';
import { findById11 } from '../fn/fermes/find-by-id-11';
import { FindById11$Params } from '../fn/fermes/find-by-id-11';
import { save10 } from '../fn/fermes/save-10';
import { Save10$Params } from '../fn/fermes/save-10';

@Injectable({ providedIn: 'root' })
export class FermesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll11()` */
  static readonly FindAll11Path = '/fermes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll11()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll11$Response(params?: FindAll11$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FermeDto>>> {
    return findAll11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll11$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll11(params?: FindAll11$Params, context?: HttpContext): Observable<Array<FermeDto>> {
    return this.findAll11$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FermeDto>>): Array<FermeDto> => r.body)
    );
  }

  /** Path part for operation `save10()` */
  static readonly Save10Path = '/fermes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save10()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save10$Response(params: Save10$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save10(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save10$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save10(params: Save10$Params, context?: HttpContext): Observable<number> {
    return this.save10$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById11()` */
  static readonly FindById11Path = '/fermes/{fermeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById11()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById11$Response(params: FindById11$Params, context?: HttpContext): Observable<StrictHttpResponse<FermeDto>> {
    return findById11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById11$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById11(params: FindById11$Params, context?: HttpContext): Observable<FermeDto> {
    return this.findById11$Response(params, context).pipe(
      map((r: StrictHttpResponse<FermeDto>): FermeDto => r.body)
    );
  }

  /** Path part for operation `delete10()` */
  static readonly Delete10Path = '/fermes/{fermeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete10()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete10$Response(params: Delete10$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete10(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete10(params: Delete10$Params, context?: HttpContext): Observable<void> {
    return this.delete10$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
