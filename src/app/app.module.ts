import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { DndComponent } from './pages/dnd/dnd.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { CalendarComponent } from './components/calendar/calendar.component';


export function momentAdapterFactory() {
  return adapterFactory(moment);
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DndComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatMenuModule,
    MatButtonModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
