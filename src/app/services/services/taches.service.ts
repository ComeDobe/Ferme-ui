/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete1 } from '../fn/taches/delete-1';
import { Delete1$Params } from '../fn/taches/delete-1';
import { findAll1 } from '../fn/taches/find-all-1';
import { FindAll1$Params } from '../fn/taches/find-all-1';
import { findById1 } from '../fn/taches/find-by-id-1';
import { FindById1$Params } from '../fn/taches/find-by-id-1';
import { save1 } from '../fn/taches/save-1';
import { Save1$Params } from '../fn/taches/save-1';
import { TacheDto } from '../models/tache-dto';

@Injectable({ providedIn: 'root' })
export class TachesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll1()` */
  static readonly FindAll1Path = '/taches/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: FindAll1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TacheDto>>> {
    return findAll1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: FindAll1$Params, context?: HttpContext): Observable<Array<TacheDto>> {
    return this.findAll1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TacheDto>>): Array<TacheDto> => r.body)
    );
  }

  /** Path part for operation `save1()` */
  static readonly Save1Path = '/taches/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1$Response(params: Save1$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1(params: Save1$Params, context?: HttpContext): Observable<number> {
    return this.save1$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById1()` */
  static readonly FindById1Path = '/taches/{tacheId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: FindById1$Params, context?: HttpContext): Observable<StrictHttpResponse<TacheDto>> {
    return findById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: FindById1$Params, context?: HttpContext): Observable<TacheDto> {
    return this.findById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<TacheDto>): TacheDto => r.body)
    );
  }

  /** Path part for operation `delete1()` */
  static readonly Delete1Path = '/taches/{tacheId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: Delete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: Delete1$Params, context?: HttpContext): Observable<void> {
    return this.delete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
