import { Photo } from './photo.interface';

export interface User {
  id: number;
  username: string;
  knownAs: string;
  photoUrl: string;
  introduction: string;
  lookingFor: string;
  interest: string;
  city: string;
  country: string;
  gender: string;
  age: number;
  createdAt: string;
  updatedAt: string;
  lastActive: string;
  photos: Photo[];
}
