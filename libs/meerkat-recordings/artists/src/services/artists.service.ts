import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArtistsService {
  constructor(private httpClient: HttpClient) {}

  getArtists() {
    console.log('in service');
    return this.httpClient.get(`http://localhost:4200/assets/artists.json`);
  }

  // getArtists(country: string = null) {
  //   const url = country !== null
  //     ? `http://localhost:4200/assets/artists.json?country=${country}`
  //     : `http://localhost:4200/assets/artists.json`;

  //   return this.httpClient.get(url);
  // }
}
