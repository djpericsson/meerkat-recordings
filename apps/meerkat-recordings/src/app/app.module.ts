import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NxModule } from "@nrwl/nx";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@meerkat-recordings/meerkat-recordings/layout";

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: "", pathMatch: "full", redirectTo: "home" },
        {
          path: "home",
          loadChildren: "@meerkat-recordings/meerkat-recordings/home#HomeModule"
        },
        {
          path: "artists",
          loadChildren:
            "@meerkat-recordings/meerkat-recordings/artists#ArtistsModule"
        },
        {
          path: "releases",
          loadChildren:
            "@meerkat-recordings/meerkat-recordings/releases#ReleasesModule"
        }
      ],
      {
        initialNavigation: "enabled"
      }
    ),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
