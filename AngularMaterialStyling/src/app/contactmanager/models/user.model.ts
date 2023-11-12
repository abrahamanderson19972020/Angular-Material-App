import { Note } from './note.model';

export interface User {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  birthDate: Date;
  notes: Note[];
}
