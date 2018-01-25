import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtistListComponent } from './containers/artist-list/artist-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { artistsReducer } from './+state/artists.reducer';
import { artistsInitialState } from './+state/artists.init';
import { ArtistsEffects } from './+state/artists.effects';
import { ArtistsService } from './services/artists.service';
import { MaterialModule } from '@meerkat-recordings/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: ArtistListComponent }]),
    StoreModule.forFeature('artists', artistsReducer, { initialState: artistsInitialState }),
    EffectsModule.forRoot([ArtistsEffects]),
    MaterialModule
  ],
  declarations: [ArtistListComponent],
  providers: [ArtistsEffects, ArtistsService]
})
export class ArtistsModule {}
