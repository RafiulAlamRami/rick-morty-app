// import { Component, Input, OnInit } from '@angular/core';
// import { RickAndMortyService } from '../services/rick-and-morty.service';
// import { Character_Model } from '../models/character.model';

// @Component({
//   selector: 'app-characters',
//   standalone: false,
  
//   templateUrl: './characters.component.html',
//   styleUrl: './characters.component.css'
// })
// export class CharactersComponent implements OnInit {
//   characters: Character_Model[] = [];
//   currentPage = 1;
//   totalPages = 0;
//   isLoading = false;

//   searchItem: string = '';
//   selectedStatus: string = '';

  
//   constructor(private rickAndMortyService: RickAndMortyService) {}

//   ngOnInit(): void {
//     this.fetchCharacters();
//   }

//   fetchCharacters() {
//     this.isLoading = true;
//     this.rickAndMortyService.getCharacters(this.currentPage).subscribe((responseData: any) => {
//       console.log(responseData);
      
//       this.characters = responseData.results;
//       this.totalPages = responseData.info.pages;
//       this.isLoading = false;
//     },
//     (error) => {
//       console.error('Error fetching episodes', error);
//       this.isLoading = false;
//     });
//   }

//   changePage(page: number) {
//     this.currentPage = page;
//     this.fetchCharacters();
//   }

//   onSearchChange(searchValue: string) {
//     this.searchItem = searchValue;
//     console.log('Search Term:', searchValue);
//     // this.characters=this.characters.filter(character=>character.name===searchValue)
//   }

//   // Method to handle status change
//   onStatusChange(status: string) {
//     this.selectedStatus = status;
//     console.log('Selected Status:', status.length);
//     // this.characters=this.characters.filter(character=>character.origin.name===status)
//   }

// }

// -------------------------------------------------------

// --------------------------

import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { Character_Model } from '../models/character.model';

@Component({
  selector: 'app-characters',
  standalone: false,
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character_Model[] = [];
  currentPage = 1;
  totalPages = 0;
  isLoading = false;

  searchItem: string = '';  
  selectedStatus: string = '';  
  bySearch: string = '';
  byStatus: string = '';

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.isLoading = true;

    if (this.searchItem && this.searchItem.length > 0) {
      this.bySearch = this.searchItem; 
    }

    if (this.selectedStatus && this.selectedStatus.length > 0) {
      this.byStatus = this.selectedStatus; 
    }

    this.rickAndMortyService.getCharacters(this.bySearch, this.byStatus, this.currentPage).subscribe(
      (responseData: any) => {
        console.log(responseData);

        this.characters = responseData.results;
        this.totalPages = responseData.info.pages;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching characters', error);
        this.isLoading = false;
      }
    );
  }

  changePage(page: number) {
    this.currentPage = page;
    this.fetchCharacters();
  }

  onSearchChange(searchValue: string) {
    this.searchItem = searchValue;
    console.log(searchValue);
    this.fetchCharacters(); 
  }

  onStatusChange(status: string) {
    this.selectedStatus = status;
    console.log(status);
    this.fetchCharacters();
  }
}



