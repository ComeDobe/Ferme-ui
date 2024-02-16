/* tslint:disable */
/* eslint-disable */
import { RoleDto } from '../models/role-dto';
export interface UtilisateurDto {
  active?: boolean;
  admin?: boolean;
  adresse: string;
  email: string;
  firstName: string;
  id?: number;
  lastName: string;
  password: string;
  role?: Array<RoleDto>;
  telephone: string;
}
