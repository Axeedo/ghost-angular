import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Material modules */
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';


/* Video modules */
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

/* App components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './view/main-menu/main-menu.component';
import { HomeComponent } from './view/pages/home/home.component';
import { AnimeComponent } from './view/pages/anime/anime.component';
import { AnimeCardComponent } from './view/components/anime-card/anime-card.component';
import { RecentComponent } from './view/pages/recent/recent.component';
import { HorizontalListComponent } from './view/components/horizontal-list/horizontal-list.component';
import { SearchComponent} from './view/pages/search/search.component';
import { AnimeInfoCardComponent } from './view/components/anime-info-card/anime-info-card.component';
import { ThemesVerticalListComponent } from './view/components/themes-vertical-list/themes-vertical-list.component';
import { ThemeCardComponent } from './view/components/theme-card/theme-card.component';
import { VideoPlayerComponent } from './view/components/video-player/video-player.component'; 
import {ListComponent} from './view/pages/list/list.component'; 
import { AppGlobalRippleOptionsService } from './service/global-ripple-options/app-global-ripple-options.service';
import { GridAnimeListComponent } from './view/components/grid-anime-list/grid-anime-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    HomeComponent,
    AnimeCardComponent,
    SearchComponent,
    MainMenuComponent,
    RecentComponent,
    HorizontalListComponent,
    AnimeInfoCardComponent,
    ThemesVerticalListComponent,
    ThemeCardComponent,
    VideoPlayerComponent,
    ListComponent,
    GridAnimeListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,

    /* Material modules */
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatGridListModule,

    /* Video modules */
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
    
  ],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: AppGlobalRippleOptionsService}
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { 
  constructor(){
  }
}
