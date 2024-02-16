/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete11 } from '../fn/especes/delete-11';
import { Delete11$Params } from '../fn/especes/delete-11';
import { EspeceDto } from '../models/espece-dto';
import { findAll12 } from '../fn/especes/find-all-12';
import { FindAll12$Params } from '../fn/especes/find-all-12';
import { findById12 } from '../fn/especes/find-by-id-12';
import { FindById12$Params } from '../fn/especes/find-by-id-12';
import { save11 } from '../fn/especes/save-11';
import { Save11$Params } from '../fn/especes/save-11';

@Injectable({ providedIn: 'root' })
export class EspecesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll12()` */
  static readonly FindAll12Path = '/especes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll12()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll12$Response(params?: FindAll12$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EspeceDto>>> {
    return findAll12(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll12$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll12(params?: FindAll12$Params, context?: HttpContext): Observable<Array<EspeceDto>> {
    return this.findAll12$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EspeceDto>>): Array<EspeceDto> => r.body)
    );
  }

  /** Path part for operation `save11()` */
  static readonly Save11Path = '/especes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save11()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save11$Response(params: Save11$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save11$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save11(params: Save11$Params, context?: HttpContext): Observable<number> {
    return this.save11$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById12()` */
  static readonly FindById12Path = '/especes/{especeI}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById12()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById12$Response(params?: FindById12$Params, context?: HttpContext): Observable<StrictHttpResponse<EspeceDto>> {
    return findById12(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById12$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById12(params?: FindById12$Params, context?: HttpContext): Observable<EspeceDto> {
    return this.findById12$Response(params, context).pipe(
      map((r: StrictHttpResponse<EspeceDto>): EspeceDto => r.body)
    );
  }

  /** Path part for operation `delete11()` */
  static readonly Delete11Path = '/especes/{especeI}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete11()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete11$Response(params?: Delete11$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete11(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete11$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete11(params?: Delete11$Params, context?: HttpContext): Observable<void> {
    return this.delete11$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
