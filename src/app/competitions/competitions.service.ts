import { Injectable } from '@angular/core';
import { Competition } from './competition.model';
import { HttpClient } from '@angular/common/http';
import { of, BehaviorSubject } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

interface CompetitionData {
  results: Competition[];
}

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {

  constructor(private http: HttpClient) { }

  private _competitions = new BehaviorSubject<Competition[]> (Competition.backup);

  get competitions() {
    return this._competitions.asObservable();
  }

  fetchCompetitions() {
    return this.http
      .get<CompetitionData>(
        'http://localhost:8000/ws/competitions'
      )
      .pipe(
        map(competitionData => {
          if (competitionData.results.length > 0) {
            return competitionData.results;
          } else {
            throw new Error('No competition data, using default');
          }
        }),
        tap(competitions => {
          this._competitions.next(competitions);
        }), catchError(err => {
          console.log('HTTP error or no competitions: ' + err);
          this._competitions.next(Competition.backup);
          return of([]);
        })
      );
  }
}
