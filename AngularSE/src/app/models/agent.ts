import {Manager} from "./manager";

export interface Agent {

  idAgent?: number;
  lat?: number;
  lon?: number;
  hireDate?: string;
  endDate?: string;
  userDTO?: {
    idUser?: number,
    name?: string,
    surname?: string,
    email?: string,
    birthDate?: string,
    sex?: string,
    address?: string,
    city?: string,
    state?: string,
    token?: string
  };
  managerDTO?: Manager;
}
