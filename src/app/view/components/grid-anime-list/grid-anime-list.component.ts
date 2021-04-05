import { Component, Input } from '@angular/core';
import { ThemesAnime } from 'src/app/interface/anime-themes';

@Component({
  selector: 'app-grid-anime-list',
  templateUrl: './grid-anime-list.component.html',
  styleUrls: ['./grid-anime-list.component.css']
})
export class GridAnimeListComponent {
  @Input() animeList!:ThemesAnime[]
  
  constructor() { }

}
