import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListSoireesComponent } from './list-soirees/list-soirees.component';
import { ListGoodiesComponent } from './list-goodies/list-goodies.component';
import { GoodiesComponent } from './goodies/goodies.component';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
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
    path: 'reservations/:id',
    component: ListReservationsComponent
  },
  {
    path: 'reservations/add',
    component: ReservationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
