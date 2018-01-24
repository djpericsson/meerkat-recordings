import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtistListComponent } from './containers/artist-list/artist-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { artistsReducer } from './+state/artists.reducer';
import { artistsInitialState } from './+state/artists.init';
import { ArtistsEffects } from './+state/artists.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: ArtistListComponent }]),
    StoreModule.forFeature('artists', artistsReducer, { initialState: artistsInitialState }),
    EffectsModule.forFeature([ArtistsEffects])
  ],
  declarations: [ArtistListComponent],
  providers: [ArtistsEffects]
})
export class ArtistsModule {}
