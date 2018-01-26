import { Artists } from "./artists.interfaces";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Artist } from "@meerkat-recordings/data-models";

export const adapter: EntityAdapter<Artist> = createEntityAdapter<Artist>();

export const artistsInitialState: Artists = adapter.getInitialState({
  loading: false
});
