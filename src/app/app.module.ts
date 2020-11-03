import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { ShipyardComponent } from './shipyard/shipyard.component';
import {Ng2OdometerModule} from 'ng2-odometer';
import { DescriptionComponent } from './description/description.component';
import { BoatCredoComponent } from './boat-credo/boat-credo.component';
import { GaroldElizabethComponent } from './garold-elizabeth/garold-elizabeth.component';
import {NgxGalleryModule} from 'ngx-gallery';
import { FrankivskGalichComponent } from './frankivsk-galich/frankivsk-galich.component';
import { DovbankaComponent } from './dovbanka/dovbanka.component';
import { LodiaComponent } from './lodia/lodia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ShipyardComponent,
    DescriptionComponent,
    BoatCredoComponent,
    GaroldElizabethComponent,
    FrankivskGalichComponent,
    DovbankaComponent,
    LodiaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    NgxGalleryModule,
    Ng2OdometerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
