import { Action } from '@ngrx/store';
import { Artist } from "@meerkat-recordings/data-models";

export enum ArtistsActionTypes {
  LoadArtists = '[Artists] Load',
  LoadArtistsSuccess = '[Artists] Load Sucess',
  LoadArtistsFail = '[Artists] Load Fail',
  SetArtistsFilter = '[Artists] Set Filter'
}

export class LoadArtistsAction implements Action {
  readonly type = ArtistsActionTypes.LoadArtists;
}

export class LoadArtistsSuccessAction implements Action {
  readonly type = ArtistsActionTypes.LoadArtistsSuccess;
  constructor(public payload: Artist[]) {}
}

export class LoadArtistsFailAction implements Action {
  readonly type = ArtistsActionTypes.LoadArtistsSuccess;
  constructor(public payload: any) {}
}

export class SetArtistsFiltersAction {
  readonly type = ArtistsActionTypes.SetArtistsFilter;
  constructor(public payload: string) {}
}

export type ArtistsActions =
  | LoadArtistsAction
  | LoadArtistsSuccessAction
  | LoadArtistsFailAction
  | SetArtistsFiltersAction;
