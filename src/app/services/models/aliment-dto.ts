/* tslint:disable */
/* eslint-disable */
import { RegimeDto } from '../models/regime-dto';
export interface AlimentDto {
  composition?: string;
  id?: number;
  nom?: string;
  prix?: number;
  regime?: RegimeDto;
  type?: string;
}
