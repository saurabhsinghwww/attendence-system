import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { AttendenceService } from './services/attendence/attendence.services';

@NgModule({
  declarations: [
    AppComponent, AttendenceComponent
  ],
  imports: [ BrowserModule, HttpModule ],
  providers: [AttendenceService],
  bootstrap: [AppComponent]
})

export class AppModule { }