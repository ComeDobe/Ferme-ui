/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete7 } from '../fn/parcelles/delete-7';
import { Delete7$Params } from '../fn/parcelles/delete-7';
import { findAll8 } from '../fn/parcelles/find-all-8';
import { FindAll8$Params } from '../fn/parcelles/find-all-8';
import { findById8 } from '../fn/parcelles/find-by-id-8';
import { FindById8$Params } from '../fn/parcelles/find-by-id-8';
import { ParcelleDto } from '../models/parcelle-dto';
import { save7 } from '../fn/parcelles/save-7';
import { Save7$Params } from '../fn/parcelles/save-7';

@Injectable({ providedIn: 'root' })
export class ParcellesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll8()` */
  static readonly FindAll8Path = '/parcelles/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8$Response(params?: FindAll8$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ParcelleDto>>> {
    return findAll8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8(params?: FindAll8$Params, context?: HttpContext): Observable<Array<ParcelleDto>> {
    return this.findAll8$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ParcelleDto>>): Array<ParcelleDto> => r.body)
    );
  }

  /** Path part for operation `save7()` */
  static readonly Save7Path = '/parcelles/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save7()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save7$Response(params: Save7$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save7$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save7(params: Save7$Params, context?: HttpContext): Observable<number> {
    return this.save7$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById8()` */
  static readonly FindById8Path = '/parcelles/{parcelleId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8$Response(params: FindById8$Params, context?: HttpContext): Observable<StrictHttpResponse<ParcelleDto>> {
    return findById8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8(params: FindById8$Params, context?: HttpContext): Observable<ParcelleDto> {
    return this.findById8$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParcelleDto>): ParcelleDto => r.body)
    );
  }

  /** Path part for operation `delete7()` */
  static readonly Delete7Path = '/parcelles/{parcelleId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete7()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7$Response(params: Delete7$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7(params: Delete7$Params, context?: HttpContext): Observable<void> {
    return this.delete7$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
