/* tslint:disable */
/* eslint-disable */
import { EmployeDto } from '../models/employe-dto';
import { MaterielDto } from '../models/materiel-dto';
export interface MaintenanceDto {
  cout?: string;
  date?: string;
  description?: string;
  employe?: EmployeDto;
  id?: number;
  materiel?: MaterielDto;
}
