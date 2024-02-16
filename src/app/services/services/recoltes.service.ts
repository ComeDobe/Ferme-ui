/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete3 } from '../fn/recoltes/delete-3';
import { Delete3$Params } from '../fn/recoltes/delete-3';
import { findAll4 } from '../fn/recoltes/find-all-4';
import { FindAll4$Params } from '../fn/recoltes/find-all-4';
import { findById4 } from '../fn/recoltes/find-by-id-4';
import { FindById4$Params } from '../fn/recoltes/find-by-id-4';
import { RecolteDto } from '../models/recolte-dto';
import { save3 } from '../fn/recoltes/save-3';
import { Save3$Params } from '../fn/recoltes/save-3';

@Injectable({ providedIn: 'root' })
export class RecoltesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll4()` */
  static readonly FindAll4Path = '/recoltes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4$Response(params?: FindAll4$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RecolteDto>>> {
    return findAll4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4(params?: FindAll4$Params, context?: HttpContext): Observable<Array<RecolteDto>> {
    return this.findAll4$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RecolteDto>>): Array<RecolteDto> => r.body)
    );
  }

  /** Path part for operation `save3()` */
  static readonly Save3Path = '/recoltes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3$Response(params: Save3$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3(params: Save3$Params, context?: HttpContext): Observable<number> {
    return this.save3$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById4()` */
  static readonly FindById4Path = '/recoltes/{recolteId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4$Response(params: FindById4$Params, context?: HttpContext): Observable<StrictHttpResponse<RecolteDto>> {
    return findById4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4(params: FindById4$Params, context?: HttpContext): Observable<RecolteDto> {
    return this.findById4$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecolteDto>): RecolteDto => r.body)
    );
  }

  /** Path part for operation `delete3()` */
  static readonly Delete3Path = '/recoltes/{recolteId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3$Response(params: Delete3$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3(params: Delete3$Params, context?: HttpContext): Observable<void> {
    return this.delete3$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
