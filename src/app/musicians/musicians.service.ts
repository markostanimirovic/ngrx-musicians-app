import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Musician } from './musician.model';

@Injectable({ providedIn: 'root' })
export class MusiciansService {
  getAll(): Observable<Musician[]> {
    return of(musiciansMock).pipe(delay(1_000));
  }
}

const musiciansMock: Musician[] = [
  {
    id: 1,
    name: 'Eric Clapton',
    photoUrl: '/assets/musicians/eric-clapton.jpg',
  },
  {
    id: 2,
    name: 'Stevie Ray Vaughan',
    photoUrl: '/assets/musicians/srv.jpg',
  },
  {
    id: 3,
    name: 'B.B. King',
    photoUrl: '/assets/musicians/bb-king.jpg',
  },
  {
    id: 4,
    name: 'Gary Moore',
    photoUrl: '/assets/musicians/gary-moore.jpg',
  },
  {
    id: 5,
    name: 'Jimi Hendrix',
    photoUrl: '/assets/musicians/jimi-hendrix.jpg',
  },
  {
    id: 6,
    name: 'Keith Richards',
    photoUrl: '/assets/musicians/keith-richards.jpg',
  },
];
