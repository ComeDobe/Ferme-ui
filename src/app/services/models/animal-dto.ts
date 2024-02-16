/* tslint:disable */
/* eslint-disable */
import { TacheDto } from '../models/tache-dto';
export interface AnimalDto {
  id?: number;
  nom?: string;
  poids?: number;
  sante?: string;
  sexe?: string;
  tache?: TacheDto;
}
