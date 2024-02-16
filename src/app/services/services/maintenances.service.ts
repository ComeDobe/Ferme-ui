/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete9 } from '../fn/maintenances/delete-9';
import { Delete9$Params } from '../fn/maintenances/delete-9';
import { findAll10 } from '../fn/maintenances/find-all-10';
import { FindAll10$Params } from '../fn/maintenances/find-all-10';
import { findById10 } from '../fn/maintenances/find-by-id-10';
import { FindById10$Params } from '../fn/maintenances/find-by-id-10';
import { MaintenanceDto } from '../models/maintenance-dto';
import { save9 } from '../fn/maintenances/save-9';
import { Save9$Params } from '../fn/maintenances/save-9';

@Injectable({ providedIn: 'root' })
export class MaintenancesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll10()` */
  static readonly FindAll10Path = '/maintenances/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll10()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll10$Response(params?: FindAll10$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MaintenanceDto>>> {
    return findAll10(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll10(params?: FindAll10$Params, context?: HttpContext): Observable<Array<MaintenanceDto>> {
    return this.findAll10$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MaintenanceDto>>): Array<MaintenanceDto> => r.body)
    );
  }

  /** Path part for operation `save9()` */
  static readonly Save9Path = '/maintenances/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save9()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save9$Response(params: Save9$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save9(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save9$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save9(params: Save9$Params, context?: HttpContext): Observable<number> {
    return this.save9$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById10()` */
  static readonly FindById10Path = '/maintenances/{maitenanceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById10()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById10$Response(params?: FindById10$Params, context?: HttpContext): Observable<StrictHttpResponse<MaintenanceDto>> {
    return findById10(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById10$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById10(params?: FindById10$Params, context?: HttpContext): Observable<MaintenanceDto> {
    return this.findById10$Response(params, context).pipe(
      map((r: StrictHttpResponse<MaintenanceDto>): MaintenanceDto => r.body)
    );
  }

  /** Path part for operation `delete9()` */
  static readonly Delete9Path = '/maintenances/{maitenanceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete9()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete9$Response(params?: Delete9$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete9(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete9$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete9(params?: Delete9$Params, context?: HttpContext): Observable<void> {
    return this.delete9$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
