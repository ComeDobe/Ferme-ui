/* tslint:disable */
/* eslint-disable */
import { FermeDto } from '../models/ferme-dto';
export interface MaterielDto {
  dateAchat?: string;
  dateReparation?: string;
  etatMateriel?: string;
  ferme?: FermeDto;
  id?: number;
  marque?: string;
  modele?: string;
  nom?: string;
  type?: string;
}
