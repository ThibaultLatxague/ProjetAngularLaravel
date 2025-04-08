import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSoireesComponent } from './list-soirees/list-soirees.component';
import { ListGoodiesComponent } from './list-goodies/list-goodies.component';
import { GoodiesComponent } from './goodies/goodies.component';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  {
    path: '',
    component: ListSoireesComponent
  },
  {
    path: 'soirees',
    component: ListSoireesComponent
  },
  {
    path: 'goodies',
    component: ListGoodiesComponent
  },
  {
    path: 'goodies/add',
    component: GoodiesComponent
  },
  {
    path: 'goodies/edit/:id',
    component: GoodiesComponent
  },
  {
    path: 'goodies/delete/:id',
    component: GoodiesComponent
  },
  {
    path: 'reservations',
    component: ListReservationsComponent
  },
  {
    path: 'reservations/add',
    component: ReservationsComponent
  },
  {
    path: 'reservations/:id',
    component: ListReservationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
