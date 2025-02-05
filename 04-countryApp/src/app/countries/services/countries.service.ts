import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      // tap(countries => console.log('Tap1',countries)), //esto es para ver los datos que se obtienen
      // map( countries => []), // El map en rjxs sirve para transformar los datos
      // tap(countries => console.log('Tap2',countries)) // El tap sirve para generar efectos secundarios
      catchError( error => { // el catch en rjxs sirve para capturar errores cuando se hace una peticion http
        console.error(error);
        return of([]); // consume el error y retorna un observable vacio
      })
    );
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${region}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError( () => of([]))
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError( () => of([]))
    );
  }

}
