import {Manager} from './manager';
import {Agent} from './agent';
import {Intervention} from './intervention';

export interface Assign {
  idAssign?: number;
  manager?: Manager;
  agent?: Agent;
  confirm?: number;
  concluded?: number;
  startValidate?: string;
  endValidate?: string;
  intervention?: Intervention;
}
