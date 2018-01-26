import { Artists } from "./artists.interfaces";
import * as artistsActions from "./artists.actions";
import { adapter } from "./artists.init";

export function artistsReducer(
  state: Artists,
  action: artistsActions.ArtistsActions
): Artists {
  switch (action.type) {
    case artistsActions.ArtistsActionTypes.LoadArtists: {
      return { ...state, loading: true };
    }

    case artistsActions.ArtistsActionTypes.LoadArtistsSuccess: {
      return adapter.addAll(action.payload, { ...state, loading: false });
    }

    default: {
      return state;
    }
  }
}

// export const getSelectedArtistId = (state: Artists) => state.selectedArtistId;

export const {
  // select the array of Artist ids
  selectIds: selectArtistIds,

  // select the dictionary of Artist entities
  selectEntities: selectArtistEntities,

  // select the array of Artists
  selectAll: selectAllArtists,

  // select the total Artist count
  selectTotal: selectArtistTotal
} = adapter.getSelectors();
