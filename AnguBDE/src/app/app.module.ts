import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GoodiesComponent } from './goodies/goodies.component';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationsService } from './services/reservations.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule ,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    ReservationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
