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

  private _atelier = new BehaviorSubject<Atelier>(new Atelier(0, Atelier.backup));

  get atelier() {
    return this._atelier.asObservable();
  }

  getAtelier(id: string) {
    return this.http.get<Atelier>(`http://localhost:8000/ws/atelier/${id}`);
  }

  fetchAtelier() {
    return this._atelier;
    /*
    return this.http
      .get<{[key: number]: Atelier }>(
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
          this._atelier.next(places);
        })
      );*/
  }
}
