import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

export interface babyName {
  id: number,
  label: string,
  liked: boolean,
}

@Injectable({
  providedIn: 'root'
})


export class Names {
  private apiURL = 'http://localhost:3000/names';

  constructor(private http: HttpClient) {};

  getNames(): Observable<babyName[]> {

    return this.http.get<babyName[]>(this.apiURL).pipe(
      map((names) => names.sort((a,b) => a.label.localeCompare(b.label))),
      catchError(err => {
        console.error('Erreur get Names', err);
        return throwError(() => new Error('Impossible de retourner les prénoms'));
      })
    )
  };

  addName(label: string): Observable<babyName> {
    const payload = { label, liked: false };

    return this.http.post<babyName>(this.apiURL, payload).pipe(
      catchError(err => {
        console.error('Erreur addName', err);
        return throwError(() => new Error('Impossible d\'ajouter le prénom'));
      })
    )
  };

  toggleLike(name: babyName): Observable<babyName> {

    return this.http.patch<babyName>(`${this.apiURL}/${name.id}`, {
      liked: !name.liked
    }).pipe(
      catchError(err => {
        console.error('Erreur toggleLike', err);
        return throwError(() => new Error('Impossible de mettre à jour le like'));
      })
    )
  };
  
  deleteName(id: Number): Observable<void> {
    
    return this.http.delete<void>(`${this.apiURL}/${id}`).pipe(
      catchError(err => {
        console.error('Erreur deleteName', err);
        return throwError(() => new Error('Impossible de supprimer le nom'));
      })
    )
  };
}
