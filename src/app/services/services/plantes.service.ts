/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete5 } from '../fn/plantes/delete-5';
import { Delete5$Params } from '../fn/plantes/delete-5';
import { findAll6 } from '../fn/plantes/find-all-6';
import { FindAll6$Params } from '../fn/plantes/find-all-6';
import { findById6 } from '../fn/plantes/find-by-id-6';
import { FindById6$Params } from '../fn/plantes/find-by-id-6';
import { PlanteDto } from '../models/plante-dto';
import { save5 } from '../fn/plantes/save-5';
import { Save5$Params } from '../fn/plantes/save-5';

@Injectable({ providedIn: 'root' })
export class PlantesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll6()` */
  static readonly FindAll6Path = '/plantes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll6()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll6$Response(params?: FindAll6$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PlanteDto>>> {
    return findAll6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll6(params?: FindAll6$Params, context?: HttpContext): Observable<Array<PlanteDto>> {
    return this.findAll6$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PlanteDto>>): Array<PlanteDto> => r.body)
    );
  }

  /** Path part for operation `save5()` */
  static readonly Save5Path = '/plantes/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save5()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5$Response(params: Save5$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save5$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5(params: Save5$Params, context?: HttpContext): Observable<number> {
    return this.save5$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById6()` */
  static readonly FindById6Path = '/plantes/{planteId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById6()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById6$Response(params: FindById6$Params, context?: HttpContext): Observable<StrictHttpResponse<PlanteDto>> {
    return findById6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById6(params: FindById6$Params, context?: HttpContext): Observable<PlanteDto> {
    return this.findById6$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlanteDto>): PlanteDto => r.body)
    );
  }

  /** Path part for operation `delete5()` */
  static readonly Delete5Path = '/plantes/{planteId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete5()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete5$Response(params: Delete5$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete5(params: Delete5$Params, context?: HttpContext): Observable<void> {
    return this.delete5$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
