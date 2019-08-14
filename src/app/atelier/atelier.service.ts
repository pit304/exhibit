import { Injectable } from '@angular/core';
import { Atelier } from './atelier.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, EMPTY } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtelierService {

  constructor(private http: HttpClient) { }

  private _atelier = new BehaviorSubject<Atelier>(new Atelier(0, Atelier.backup));

  get atelier() {
    return this._atelier.asObservable();
  }

  getAtelier(id: string) {
    return this.http.get<Atelier>(`http://localhost:8000/ws/atelier/${id}`);
  }

  fetchAtelier() {
    return this.http
      .get(
        'http://localhost:8000/ws/atelier'
      )
      .pipe(
        tap(ateliers => {
          console.log(ateliers);
        }), catchError(this.handleError)
      );
  }

  handleError(error) {
    console.log(error);
    return EMPTY;
  }
}
