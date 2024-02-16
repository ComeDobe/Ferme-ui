/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete4 } from '../fn/productions/delete-4';
import { Delete4$Params } from '../fn/productions/delete-4';
import { findAll5 } from '../fn/productions/find-all-5';
import { FindAll5$Params } from '../fn/productions/find-all-5';
import { findById5 } from '../fn/productions/find-by-id-5';
import { FindById5$Params } from '../fn/productions/find-by-id-5';
import { ProductionDto } from '../models/production-dto';
import { save4 } from '../fn/productions/save-4';
import { Save4$Params } from '../fn/productions/save-4';

@Injectable({ providedIn: 'root' })
export class ProductionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll5()` */
  static readonly FindAll5Path = '/productions/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll5$Response(params?: FindAll5$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductionDto>>> {
    return findAll5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll5(params?: FindAll5$Params, context?: HttpContext): Observable<Array<ProductionDto>> {
    return this.findAll5$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProductionDto>>): Array<ProductionDto> => r.body)
    );
  }

  /** Path part for operation `save4()` */
  static readonly Save4Path = '/productions/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4$Response(params: Save4$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4(params: Save4$Params, context?: HttpContext): Observable<number> {
    return this.save4$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById5()` */
  static readonly FindById5Path = '/productions/{productionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5$Response(params: FindById5$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductionDto>> {
    return findById5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5(params: FindById5$Params, context?: HttpContext): Observable<ProductionDto> {
    return this.findById5$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductionDto>): ProductionDto => r.body)
    );
  }

  /** Path part for operation `delete4()` */
  static readonly Delete4Path = '/productions/{productionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete4()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4$Response(params: Delete4$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4(params: Delete4$Params, context?: HttpContext): Observable<void> {
    return this.delete4$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
