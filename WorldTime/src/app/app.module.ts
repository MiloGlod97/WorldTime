import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TimeZoneButtonComponent } from './time-zone-button/time-zone-button.component';
import { DisplayTimeComponent } from './display-time/display-time.component';
import { HttpClientModule } from '@angular/common/http';
import { WorldTimeService } from './services/world-time.service';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TimeZoneButtonComponent,
    DisplayTimeComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WorldTimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
