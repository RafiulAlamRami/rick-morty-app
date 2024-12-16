import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { Character_Model } from '../models/character.model';

@Component({
  selector: 'app-characters',
  standalone: false,
  
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  characters: Character_Model[] = [];
  currentPage = 1;
  totalPages = 0;
  isLoading = false;
  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.isLoading = true;
    this.rickAndMortyService.getCharacters(this.currentPage).subscribe((responseData: any) => {
      console.log(responseData);
      
      this.characters = responseData.results;
      this.totalPages = responseData.info.pages;
      this.isLoading = false;
    },
    (error) => {
      console.error('Error fetching episodes', error);
      this.isLoading = false;
    });
  }

  changePage(page: number) {
    this.currentPage = page;
    this.fetchCharacters();
  }
}
