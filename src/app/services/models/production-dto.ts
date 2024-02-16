/* tslint:disable */
/* eslint-disable */
import { AnimalDto } from '../models/animal-dto';
export interface ProductionDto {
  animal?: AnimalDto;
  dateProduction?: string;
  id?: number;
  qualite?: string;
  quantite?: number;
  type?: string;
}
