import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { ArtistsState } from './artists.interfaces';
import * as artistsActions from './artists.actions';
import { Artist } from '@meerkat-recordings/data-models';
import { map } from 'rxjs/operators';
import { ArtistListComponent } from '../containers/artist-list/artist-list.component';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ArtistsEffects {
  @Effect()
  loadData = this.dataPersistence.fetch(artistsActions.ArtistsActionTypes.LoadArtists, {
    run: (action: artistsActions.LoadArtistsAction, state: ArtistsState) => {
      // return this.artistsService.getartists().pipe(map((artists: Artist[]) => new artistsActions.LoadArtistsSuccessAction(artists)));
    },

    onError: (action: artistsActions.LoadArtistsAction, error) => {
      return new artistsActions.LoadArtistsFailAction(error);
    }
  });

  @Effect()
  loadartistsFromRoute = this.dataPersistence.navigation(ArtistListComponent, {
    run: (a: ActivatedRouteSnapshot, state: ArtistsState) => {
      // return this.artistsService
      //   .getartists(a.queryParams['country'])
      //   .pipe(
      //     map((artists: Artist[]) => new artistsActions.LoadArtistsSuccessAction(artists))
      //   );
    },
    onError: (a: ActivatedRouteSnapshot, e: any) => {
      return new artistsActions.LoadArtistsFailAction(e);
    }
  });

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<ArtistsState>
    // private artistsService: ArtistsService
  ) {}
}
