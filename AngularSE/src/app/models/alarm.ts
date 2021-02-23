import {Citizen} from "./citizen";
import {Intervention} from "./intervention";

export interface Alarm {
  idAlarm?: number;
  citizen?: Citizen;
  intervention?: Intervention;
  alarmDate?: string;
  title?: string;
  description?: string;
}


