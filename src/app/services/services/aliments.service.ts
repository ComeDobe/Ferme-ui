/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AlimentDto } from '../models/aliment-dto';
import { delete14 } from '../fn/aliments/delete-14';
import { Delete14$Params } from '../fn/aliments/delete-14';
import { findAll15 } from '../fn/aliments/find-all-15';
import { FindAll15$Params } from '../fn/aliments/find-all-15';
import { findById15 } from '../fn/aliments/find-by-id-15';
import { FindById15$Params } from '../fn/aliments/find-by-id-15';
import { save14 } from '../fn/aliments/save-14';
import { Save14$Params } from '../fn/aliments/save-14';

@Injectable({ providedIn: 'root' })
export class AlimentsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll15()` */
  static readonly FindAll15Path = '/aliments/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll15()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll15$Response(params?: FindAll15$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AlimentDto>>> {
    return findAll15(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll15$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll15(params?: FindAll15$Params, context?: HttpContext): Observable<Array<AlimentDto>> {
    return this.findAll15$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AlimentDto>>): Array<AlimentDto> => r.body)
    );
  }

  /** Path part for operation `save14()` */
  static readonly Save14Path = '/aliments/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save14()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save14$Response(params: Save14$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save14(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save14$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save14(params: Save14$Params, context?: HttpContext): Observable<number> {
    return this.save14$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById15()` */
  static readonly FindById15Path = '/aliments/{alimentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById15()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById15$Response(params: FindById15$Params, context?: HttpContext): Observable<StrictHttpResponse<AlimentDto>> {
    return findById15(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById15$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById15(params: FindById15$Params, context?: HttpContext): Observable<AlimentDto> {
    return this.findById15$Response(params, context).pipe(
      map((r: StrictHttpResponse<AlimentDto>): AlimentDto => r.body)
    );
  }

  /** Path part for operation `delete14()` */
  static readonly Delete14Path = '/aliments/{alimentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete14()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete14$Response(params: Delete14$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete14(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete14$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete14(params: Delete14$Params, context?: HttpContext): Observable<void> {
    return this.delete14$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
