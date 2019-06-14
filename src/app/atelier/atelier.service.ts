import { Injectable } from '@angular/core';
import { Atelier } from './atelier.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtelierService {

  constructor(private http: HttpClient) { }

  private _ateliers = new BehaviorSubject<Atelier[]>([]);

  get ateliers() {
    return this._ateliers.asObservable();
  }

  getAtelier(id: string) {
    return this.http.get<Atelier>(`http://localhost:8000/ws/atelier/${id}`);
  }

  fetchAteliers() {
    return this.http
      .get<{[key: string]: Atelier }>(
        'http://localhost:8000/ws/atelier'
      )
      .pipe(
        map(resData => {
          const places = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              places.push(new Atelier(key,
                resData[key].atelier_text));
            }
          }
          return places;
          // return [];
        }),
        tap(places => {
          this._ateliers.next(places);
        })
      );
  }
}
