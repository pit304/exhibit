import { Injectable } from '@angular/core';
import { Atelier } from './atelier.model';
import { HttpClient } from '@angular/common/http';
import { of, ReplaySubject, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

interface AtelierData {
  results: Atelier[];
}

@Injectable({
  providedIn: 'root'
})
export class AtelierService {

  constructor(private http: HttpClient) { }

  private _atelier = new ReplaySubject<Atelier>();

  get atelier() {
    return this._atelier.asObservable();
  }

  getAtelier(id: string) {
    return this.http.get<Atelier>(`http://localhost:8000/ws/atelier/${id}`);
  }

  fetchAtelier() {
    return this.http
      .get<AtelierData>(
        'http://localhost:8000/ws/atelier'
      )
      .pipe(
        map(atelierData => {
          return atelierData.results[0];
        }),
        tap(atelier => {
          this._atelier.next(atelier);
        }), catchError(err => {
          console.log('HTTP error or no atelier: ' + err);  
          this._atelier.next(new Atelier(0, Atelier.backup)); 
          return of([]);   
        })
      );
  }
}
