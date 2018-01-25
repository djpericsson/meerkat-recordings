import { EntityState } from "@ngrx/entity";
import { Artist } from "@meerkat-recordings/data-models";

export interface Artists extends EntityState<Artist> {
  id: number;
  name: string;
  country: string;
  loading: boolean;
}

export interface ArtistsState {
  readonly artists: Artists;
}
