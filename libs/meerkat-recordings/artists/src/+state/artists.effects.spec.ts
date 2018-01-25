// import { TestBed, async } from '@angular/core/testing';
// import { StoreModule } from '@ngrx/store';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { DataPersistence } from '@nrwl/nx';
// import { readAll, hot } from '@nrwl/nx/testing';
// import { ArtistsEffects } from './artists.effects';

// describe('ArtistsEffects', () => {
//   let actions;
//   let effects: ArtistsEffects;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [StoreModule.forRoot({})],
//       providers: [ArtistsEffects, DataPersistence, provideMockActions(() => actions)]
//     });

//     effects = TestBed.get(ArtistsEffects);
//   });

//   describe('someEffect', () => {
//     it(
//       'should work',
//       async(async () => {
//         actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
//         expect(await readAll(effects.loadData)).toEqual([{ type: 'DATA_LOADED', payload: {} }]);
//       })
//     );
//   });
// });
