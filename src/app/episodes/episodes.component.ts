import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { Episode_Model } from '../models/episode.model';

@Component({
  selector: 'app-episodes',
  standalone: false,
  
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent implements OnInit{
  episodes: Episode_Model[] = []; 
  currentPage = 1;
  totalPages = 0;
  isLoading = false; 

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.fetchEpisodes(); 
  }

  
  fetchEpisodes() {
    this.isLoading = true;
    this.rickAndMortyService.getEpisodes(this.currentPage).subscribe(
      (responseData: any) => {
        console.log(responseData);
        
        this.episodes = responseData.results;
        this.totalPages = responseData.info.pages;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching episodes', error);
        this.isLoading = false;
      }
    );
  }

  
  changePage(page: number) {
    this.currentPage = page;
    this.fetchEpisodes();
  }

  
}
