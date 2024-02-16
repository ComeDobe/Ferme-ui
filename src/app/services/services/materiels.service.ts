/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete8 } from '../fn/materiels/delete-8';
import { Delete8$Params } from '../fn/materiels/delete-8';
import { findAll9 } from '../fn/materiels/find-all-9';
import { FindAll9$Params } from '../fn/materiels/find-all-9';
import { findById9 } from '../fn/materiels/find-by-id-9';
import { FindById9$Params } from '../fn/materiels/find-by-id-9';
import { MaterielDto } from '../models/materiel-dto';
import { save8 } from '../fn/materiels/save-8';
import { Save8$Params } from '../fn/materiels/save-8';

@Injectable({ providedIn: 'root' })
export class MaterielsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll9()` */
  static readonly FindAll9Path = '/materiels/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll9()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll9$Response(params?: FindAll9$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MaterielDto>>> {
    return findAll9(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll9$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll9(params?: FindAll9$Params, context?: HttpContext): Observable<Array<MaterielDto>> {
    return this.findAll9$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MaterielDto>>): Array<MaterielDto> => r.body)
    );
  }

  /** Path part for operation `save8()` */
  static readonly Save8Path = '/materiels/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save8()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save8$Response(params: Save8$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save8$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save8(params: Save8$Params, context?: HttpContext): Observable<number> {
    return this.save8$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById9()` */
  static readonly FindById9Path = '/materiels/{mterielId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById9()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById9$Response(params?: FindById9$Params, context?: HttpContext): Observable<StrictHttpResponse<MaterielDto>> {
    return findById9(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById9$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById9(params?: FindById9$Params, context?: HttpContext): Observable<MaterielDto> {
    return this.findById9$Response(params, context).pipe(
      map((r: StrictHttpResponse<MaterielDto>): MaterielDto => r.body)
    );
  }

  /** Path part for operation `delete8()` */
  static readonly Delete8Path = '/materiels/{mterielId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete8()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete8$Response(params?: Delete8$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete8(params?: Delete8$Params, context?: HttpContext): Observable<void> {
    return this.delete8$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
