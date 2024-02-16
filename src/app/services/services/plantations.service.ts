/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete6 } from '../fn/plantations/delete-6';
import { Delete6$Params } from '../fn/plantations/delete-6';
import { findAll7 } from '../fn/plantations/find-all-7';
import { FindAll7$Params } from '../fn/plantations/find-all-7';
import { findById7 } from '../fn/plantations/find-by-id-7';
import { FindById7$Params } from '../fn/plantations/find-by-id-7';
import { PlantationDto } from '../models/plantation-dto';
import { save6 } from '../fn/plantations/save-6';
import { Save6$Params } from '../fn/plantations/save-6';

@Injectable({ providedIn: 'root' })
export class PlantationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll7()` */
  static readonly FindAll7Path = '/plantations/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll7$Response(params?: FindAll7$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PlantationDto>>> {
    return findAll7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll7(params?: FindAll7$Params, context?: HttpContext): Observable<Array<PlantationDto>> {
    return this.findAll7$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PlantationDto>>): Array<PlantationDto> => r.body)
    );
  }

  /** Path part for operation `save6()` */
  static readonly Save6Path = '/plantations/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save6()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save6$Response(params: Save6$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save6$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save6(params: Save6$Params, context?: HttpContext): Observable<number> {
    return this.save6$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById7()` */
  static readonly FindById7Path = '/plantations/{plantationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7$Response(params: FindById7$Params, context?: HttpContext): Observable<StrictHttpResponse<PlantationDto>> {
    return findById7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7(params: FindById7$Params, context?: HttpContext): Observable<PlantationDto> {
    return this.findById7$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlantationDto>): PlantationDto => r.body)
    );
  }

  /** Path part for operation `delete6()` */
  static readonly Delete6Path = '/plantations/{plantationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete6()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete6$Response(params: Delete6$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete6(params: Delete6$Params, context?: HttpContext): Observable<void> {
    return this.delete6$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
