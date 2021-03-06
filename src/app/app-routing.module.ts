import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DndComponent } from './pages/dnd/dnd.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'dnd',      component: DndComponent },
  { path: 'schedule',      component: DndComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
