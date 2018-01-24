import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeListComponent } from './containers/home-list/home-list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: HomeListComponent }])],
  declarations: [HomeListComponent]
})
export class HomeModule {}
