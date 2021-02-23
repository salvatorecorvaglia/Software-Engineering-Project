import {Type} from "./type";

export interface Intervention {
  idIntervention?: number;
  type?: Type;
  lat?: number;
  lon?: number;
  address?: string;
  startDate?: string;
  endDate?: string;
  firstReport?: string;
  lastReport?: string;
  status?: string;
  count?: string;
}
