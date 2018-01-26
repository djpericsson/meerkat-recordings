import { Action } from "@ngrx/store";
import { Artist } from "@meerkat-recordings/data-models";

export enum ArtistsActionTypes {
  LoadArtists = "[Artists] Load",
  LoadArtistsSuccess = "[Artists] Load Success",
  LoadArtistsFail = "[Artists] Load Fail"
}

export class LoadArtistsAction implements Action {
  readonly type = ArtistsActionTypes.LoadArtists;
}

export class LoadArtistsSuccessAction implements Action {
  readonly type = ArtistsActionTypes.LoadArtistsSuccess;
  constructor(public payload: Artist[]) {}
}

export class LoadArtistsFailAction implements Action {
  readonly type = ArtistsActionTypes.LoadArtistsFail;
  constructor(public payload: any) {}
}

export type ArtistsActions =
  | LoadArtistsAction
  | LoadArtistsSuccessAction
  | LoadArtistsFailAction;
