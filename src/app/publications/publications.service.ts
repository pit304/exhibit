import { Injectable } from '@angular/core';
import { Publication } from './publication.model';
import { HttpClient } from '@angular/common/http';
import { of, BehaviorSubject } from 'rxjs';
import { tap, map, filter, catchError } from 'rxjs/operators';

interface PublicationData {
  results: Publication[];
}

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  constructor(private http: HttpClient) { }

  private _publications = new BehaviorSubject<Publication[]> (Publication.backup);

  get publications() {
    return this._publications.asObservable();
  }

  getPublication(id: string) {
    return this.publications.pipe(
      map(publications => publications.filter(publication => publication.id === +id))
    );
  }

  fetchPublications() {
    return this.http
      .get<PublicationData>(
        'http://localhost:8000/ws/publications'
      )
      .pipe(
        map(publicationData => {
          if (publicationData.results.length > 0) {
            return publicationData.results;
          } else {
            throw new Error('No publication data, using default');
          }
        }),
        tap(publications => {
          this._publications.next(publications);
        }), catchError(err => {
          console.log('HTTP error or no publications: ' + err);
          this._publications.next(Publication.backup);
          return of([]);
        })
      );
  }
}
