import {User} from "./user";

export interface Citizen {

  idCitizen?: number;
  lat: number;
  lon: number;
  userDTO: User;
}
