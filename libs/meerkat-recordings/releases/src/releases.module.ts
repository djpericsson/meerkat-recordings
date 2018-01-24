import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReleasesListComponent } from './containers/releases-list/releases-list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: ReleasesListComponent }])],
  declarations: [ReleasesListComponent]
})
export class ReleasesModule {}
