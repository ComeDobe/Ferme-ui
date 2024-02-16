/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UtilisateursService } from './services/utilisateurs.service';
import { TachesService } from './services/taches.service';
import { RegimesService } from './services/regimes.service';
import { RecoltesService } from './services/recoltes.service';
import { ProductionsService } from './services/productions.service';
import { PlantesService } from './services/plantes.service';
import { PlantationsService } from './services/plantations.service';
import { ParcellesService } from './services/parcelles.service';
import { MaterielsService } from './services/materiels.service';
import { MaintenancesService } from './services/maintenances.service';
import { FermesService } from './services/fermes.service';
import { EspecesService } from './services/especes.service';
import { EmployesService } from './services/employes.service';
import { AuthenticationControllerService } from './services/authentication-controller.service';
import { AnimalesService } from './services/animales.service';
import { AlimentsService } from './services/aliments.service';
import { RolesService } from './services/roles.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    UtilisateursService,
    TachesService,
    RegimesService,
    RecoltesService,
    ProductionsService,
    PlantesService,
    PlantationsService,
    ParcellesService,
    MaterielsService,
    MaintenancesService,
    FermesService,
    EspecesService,
    EmployesService,
    AuthenticationControllerService,
    AnimalesService,
    AlimentsService,
    RolesService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
