import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerapantallaComponent } from './primerapantalla/primerapantalla.component';
import { SegundapantallaComponent } from './segundapantalla/segundapantalla.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerapantallaComponent,
    SegundapantallaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
