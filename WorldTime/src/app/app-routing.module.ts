import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayTimeComponent } from './display-time/display-time.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: 'time/:timezone', component: DisplayTimeComponent},
  { path: '', component: HomePageComponent},
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
