import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Artist } from '@meerkat-recordings/data-models';
import { Router } from '@angular/router';
import { ArtistsState, Artists } from './../../+state/artists.interfaces';
import { selectAllArtists } from './../../+state';
import * as artistsActions from './../../+state/artists.actions';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artists$: Store<Artist[]>;

  constructor(private router: Router, private store: Store<ArtistsState>) {}

  ngOnInit() {
    this.artists$ = this.store.select(selectAllArtists);
  }
}
