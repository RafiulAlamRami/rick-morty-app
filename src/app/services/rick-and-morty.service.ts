import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}



  getCharacters(bysearch:string,byStatus:string,page: number) {
    if (typeof page==='number' && bysearch.length===0 && byStatus.length>0) {
      
      return this.http.get(`${this.baseUrl}/character?status=${byStatus}`);
    }
    else{
      if (typeof page==='number' && bysearch.length>0 && byStatus.length===0) {
        return this.http.get(`${this.baseUrl}/character?name=${bysearch}`);
      }
      else{
        return this.http.get(`${this.baseUrl}/character?page=${page}`);
      }
    }
    
  }

  getEpisodes(page: number) {
    return this.http.get(`${this.baseUrl}/episode?page=${page}`);
  }
}
