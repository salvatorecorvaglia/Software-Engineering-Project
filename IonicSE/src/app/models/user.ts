import {Agent} from './agent';
import {Citizen} from './citizen';

export interface User {

  idUser?: number;
  name?: string;
  surname?: string;
  email?: string;
  birthDate?: string;
  sex?: string;
  address?: string;
  city?: string;
  state?: string;
  token?: string;
  idAgent?: number;
  idManager?: number;
  idCitizen?: number;
  agent?: Agent;
  citizen?: Citizen;

}
