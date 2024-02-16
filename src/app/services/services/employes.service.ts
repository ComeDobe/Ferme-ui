/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete12 } from '../fn/employes/delete-12';
import { Delete12$Params } from '../fn/employes/delete-12';
import { EmployeDto } from '../models/employe-dto';
import { findAll13 } from '../fn/employes/find-all-13';
import { FindAll13$Params } from '../fn/employes/find-all-13';
import { findById13 } from '../fn/employes/find-by-id-13';
import { FindById13$Params } from '../fn/employes/find-by-id-13';
import { save12 } from '../fn/employes/save-12';
import { Save12$Params } from '../fn/employes/save-12';

@Injectable({ providedIn: 'root' })
export class EmployesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll13()` */
  static readonly FindAll13Path = '/employes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll13()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll13$Response(params?: FindAll13$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EmployeDto>>> {
    return findAll13(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll13$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll13(params?: FindAll13$Params, context?: HttpContext): Observable<Array<EmployeDto>> {
    return this.findAll13$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EmployeDto>>): Array<EmployeDto> => r.body)
    );
  }

  /** Path part for operation `save12()` */
  static readonly Save12Path = '/employes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save12()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save12$Response(params: Save12$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save12(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save12$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save12(params: Save12$Params, context?: HttpContext): Observable<number> {
    return this.save12$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById13()` */
  static readonly FindById13Path = '/employes/{employeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById13()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById13$Response(params: FindById13$Params, context?: HttpContext): Observable<StrictHttpResponse<EmployeDto>> {
    return findById13(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById13$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById13(params: FindById13$Params, context?: HttpContext): Observable<EmployeDto> {
    return this.findById13$Response(params, context).pipe(
      map((r: StrictHttpResponse<EmployeDto>): EmployeDto => r.body)
    );
  }

  /** Path part for operation `delete12()` */
  static readonly Delete12Path = '/employes/{employeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete12()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete12$Response(params: Delete12$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete12(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete12$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete12(params: Delete12$Params, context?: HttpContext): Observable<void> {
    return this.delete12$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
