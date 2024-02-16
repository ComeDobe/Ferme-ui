/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete$ } from '../fn/utilisateurs/delete';
import { Delete$Params } from '../fn/utilisateurs/delete';
import { findAll } from '../fn/utilisateurs/find-all';
import { FindAll$Params } from '../fn/utilisateurs/find-all';
import { findById } from '../fn/utilisateurs/find-by-id';
import { FindById$Params } from '../fn/utilisateurs/find-by-id';
import { invalidateAccount } from '../fn/utilisateurs/invalidate-account';
import { InvalidateAccount$Params } from '../fn/utilisateurs/invalidate-account';
import { save } from '../fn/utilisateurs/save';
import { Save$Params } from '../fn/utilisateurs/save';
import { UtilisateurDto } from '../models/utilisateur-dto';
import { validateAccount } from '../fn/utilisateurs/validate-account';
import { ValidateAccount$Params } from '../fn/utilisateurs/validate-account';

@Injectable({ providedIn: 'root' })
export class UtilisateursService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll()` */
  static readonly FindAllPath = '/utilisateurs/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: FindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {
    return findAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: FindAll$Params, context?: HttpContext): Observable<Array<UtilisateurDto>> {
    return this.findAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>): Array<UtilisateurDto> => r.body)
    );
  }

  /** Path part for operation `save()` */
  static readonly SavePath = '/utilisateurs/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save$Response(params: Save$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save(params: Save$Params, context?: HttpContext): Observable<number> {
    return this.save$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `validateAccount()` */
  static readonly ValidateAccountPath = '/utilisateurs/validate/{utilisateurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateAccount$Response(params: ValidateAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return validateAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `validateAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  validateAccount(params: ValidateAccount$Params, context?: HttpContext): Observable<number> {
    return this.validateAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `invalidateAccount()` */
  static readonly InvalidateAccountPath = '/utilisateurs/invalidate/{utilisateurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `invalidateAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  invalidateAccount$Response(params: InvalidateAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return invalidateAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `invalidateAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  invalidateAccount(params: InvalidateAccount$Params, context?: HttpContext): Observable<number> {
    return this.invalidateAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById()` */
  static readonly FindByIdPath = '/utilisateurs/{utilisateurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: FindById$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return findById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: FindById$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.findById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `delete()` */
  static readonly DeletePath = '/utilisateurs/{utilisateurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: Delete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete$(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: Delete$Params, context?: HttpContext): Observable<void> {
    return this.delete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
