import { artistsReducer } from './artists.reducer';
import { artistsInitialState } from './artists.init';
import { Artists } from './artists.interfaces';
import { DataLoaded } from './artists.actions';

describe('artistsReducer', () => {
  it('should work', () => {
    const state: Artists = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = artistsReducer(state, action);
    expect(actual).toEqual({});
  });
});
