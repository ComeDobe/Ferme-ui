/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AnimalDto } from '../models/animal-dto';
import { delete13 } from '../fn/animales/delete-13';
import { Delete13$Params } from '../fn/animales/delete-13';
import { findAll14 } from '../fn/animales/find-all-14';
import { FindAll14$Params } from '../fn/animales/find-all-14';
import { findById14 } from '../fn/animales/find-by-id-14';
import { FindById14$Params } from '../fn/animales/find-by-id-14';
import { save13 } from '../fn/animales/save-13';
import { Save13$Params } from '../fn/animales/save-13';

@Injectable({ providedIn: 'root' })
export class AnimalesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll14()` */
  static readonly FindAll14Path = '/animales/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll14()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll14$Response(params?: FindAll14$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AnimalDto>>> {
    return findAll14(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll14$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll14(params?: FindAll14$Params, context?: HttpContext): Observable<Array<AnimalDto>> {
    return this.findAll14$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AnimalDto>>): Array<AnimalDto> => r.body)
    );
  }

  /** Path part for operation `save13()` */
  static readonly Save13Path = '/animales/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save13()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save13$Response(params: Save13$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save13(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save13$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save13(params: Save13$Params, context?: HttpContext): Observable<number> {
    return this.save13$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById14()` */
  static readonly FindById14Path = '/animales/{animalId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById14()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById14$Response(params: FindById14$Params, context?: HttpContext): Observable<StrictHttpResponse<AnimalDto>> {
    return findById14(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById14$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById14(params: FindById14$Params, context?: HttpContext): Observable<AnimalDto> {
    return this.findById14$Response(params, context).pipe(
      map((r: StrictHttpResponse<AnimalDto>): AnimalDto => r.body)
    );
  }

  /** Path part for operation `delete13()` */
  static readonly Delete13Path = '/animales/{animalId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete13()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete13$Response(params: Delete13$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete13(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete13$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete13(params: Delete13$Params, context?: HttpContext): Observable<void> {
    return this.delete13$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
