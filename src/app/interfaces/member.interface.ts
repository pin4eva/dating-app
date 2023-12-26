import { Photo } from './photo.interface';
import { User } from './user.interface';

export interface Member extends User {
  photos: Photo[];
}
