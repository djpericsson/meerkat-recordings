import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromArtists from './artists.reducer';
import { Artists } from './artists.interfaces';

export const selectArtistState = createFeatureSelector<Artists>('Artists');

export const selectArtistIds = createSelector(selectArtistState, fromArtists.selectArtistIds);
export const selectArtistEntities = createSelector(selectArtistState, fromArtists.selectArtistEntities);
export const selectAllArtists = createSelector(selectArtistState, fromArtists.selectAllArtists);
export const selectArtistTotal = createSelector(selectArtistState, fromArtists.selectArtistTotal);
export const selectCurrentArtistId = createSelector(selectArtistState, fromArtists.getSelectedArtistId);

export const selectCurrentArtist = createSelector(
  selectArtistEntities,
  selectCurrentArtistId,
  (ArtistEntities, ArtistId) => ArtistEntities[ArtistId]
);
