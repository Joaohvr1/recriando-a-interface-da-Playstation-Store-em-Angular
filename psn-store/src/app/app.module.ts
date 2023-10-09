import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPriceComponent } from './components/card/card-price/card-price.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavBarComponent,
    CardLabelComponent,
    CardPriceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
