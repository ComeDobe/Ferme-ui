/* tslint:disable */
/* eslint-disable */
import { AnimalDto } from '../models/animal-dto';
import { ParcelleDto } from '../models/parcelle-dto';
import { UtilisateurDto } from '../models/utilisateur-dto';
export interface FermeDto {
  adresse?: string;
  animal?: AnimalDto;
  id?: number;
  nom?: string;
  parcelle?: ParcelleDto;
  sections?: string;
  surface?: string;
  utilisateur?: UtilisateurDto;
}
