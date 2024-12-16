import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(page: number) {
    return this.http.get(`${this.baseUrl}/character?page=${page}`);
  }

  getEpisodes(page: number) {
    return this.http.get(`${this.baseUrl}/episode?page=${page}`);
  }
}
