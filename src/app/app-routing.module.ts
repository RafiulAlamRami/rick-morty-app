import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent},
  { path: 'episodes', component: EpisodesComponent},
  { path: '', redirectTo: '/characters', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
