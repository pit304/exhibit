import { Injectable } from '@angular/core';
import { Atelier } from './atelier.model';
import { HttpClient } from '@angular/common/http';
import { of, BehaviorSubject } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface AtelierData {
  results: Atelier[];
}

@Injectable({
  providedIn: 'root'
})
export class AtelierService {

  constructor(private http: HttpClient) { }

  private _atelier = new BehaviorSubject<Atelier>(Atelier.backup);

  get atelier() {
    return this._atelier.asObservable();
  }

  fetchAtelier() {
    return this.http
      .get<AtelierData>(
        environment.djangoAddress + '/ws/atelier'
      )
      .pipe(
        map(atelierData => {
          if (atelierData.results.length > 0) {
            return atelierData.results[0];
          } else {
            throw new Error('No atelier data, using default');
          }
        }),
        tap(atelier => {
          this._atelier.next(atelier);
        }), catchError(err => {
          console.log('HTTP error or no atelier: ' + err);
          this._atelier.next(Atelier.backup);
          return of();
        })
      );
  }
}
