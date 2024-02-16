/* tslint:disable */
/* eslint-disable */
import { PlantationDto } from '../models/plantation-dto';
export interface RecolteDto {
  dateRecolte?: string;
  id?: number;
  plantation?: PlantationDto;
  qualiteProduite?: string;
  quantiteProduite?: number;
}
