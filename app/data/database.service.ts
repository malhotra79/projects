import { Injectable } from '@angular/core';
import { DataLayout } from '../data/dbstructure';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, retry, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

    URL: string = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

    constructor(private _httpClient: HttpClient) {

    }

    getData(): Observable<DataLayout> {
        return this._httpClient.get<DataLayout>(this.URL)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
