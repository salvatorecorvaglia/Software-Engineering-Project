import {User} from './user';
import {Intervention} from './intervention';

export interface Image {

  idImage?: number;
  url?: string;
  lat?: number;
  lon?: number;
  idFire?: string;
  user?: User;
  intervention?: Intervention;

}
