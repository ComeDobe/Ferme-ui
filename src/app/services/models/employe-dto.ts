/* tslint:disable */
/* eslint-disable */
import { TacheDto } from '../models/tache-dto';
export interface EmployeDto {
  adresse?: string;
  dateEmbaucher?: string;
  dateNaissance?: string;
  id?: number;
  nom?: string;
  prenom?: string;
  rang?: string;
  tache?: TacheDto;
  telephone?: string;
}
