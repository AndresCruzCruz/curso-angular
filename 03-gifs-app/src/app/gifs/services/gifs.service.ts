import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root' // para que sea un servicio global
})
export class GifsService {
  //Los arreglos pasan por referencia, por lo que si se modifica el arreglo original, se modifica en todos lados

  public gifList: Gif[] = [];

  private _tagsHistory:   string[] = []; // Se hace privado para que no se pueda modificar desde afuera
  private apiKey:         string = 'WJyRyRl0Eq5iAvkJF90Lr8jbjl2wfM9a';
  private serviceUrl:     string = 'https://api.giphy.com/v1/gifs';

  constructor(
    // Se inyecta el servicio de HttpClient
    private http: HttpClient
  ) {
    this.loadLocalStorage();
  }

  get tagHistory() {
    return [...this._tagsHistory]; // Se usa el spread operator para que no se pueda modificar el arreglo original
  }

  private organizeHistory(tag: string ){
    tag = tag.toLowerCase(); // Se convierte a minúsculas
    if (this._tagsHistory.includes(tag)) { // Si el tag ya existe en el arreglo
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag); // Se filtra el tag del arreglo
    }
    this._tagsHistory.unshift(tag); // Se agrega el tag al inicio del arreglo
    this._tagsHistory = this._tagsHistory.splice(0, 10); // Se limita el arreglo a 10 elementos
    this.saveLocalStorage();
  }


  //Guardar la informacion en el local storage para poder recuperarla
  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const temporal = localStorage.getItem('history');
    if (temporal) {
      this._tagsHistory = JSON.parse(temporal);
      if (this._tagsHistory.length > 0) {
        this.searchTag(this._tagsHistory[0]);
      }
    }
  }

  public  async searchTag(tag: string): Promise<void>  {
    if (tag.length === 0) return; // Si el tag es vacío, no se hace nada
    this.organizeHistory(tag);


    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
    .subscribe( resp => {
      this.gifList = resp.data;
    })

    // await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`)
    //   .then( resp => resp.json())
    //   .then( data => {
    //     console.log(data);
    //   })
  }
}
