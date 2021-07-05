import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ShipyardComponent} from './shipyard/shipyard.component';
import {DescriptionComponent} from './description/description.component';
import {BoatCredoComponent} from './boat-credo/boat-credo.component';
import {GaroldElizabethComponent} from './garold-elizabeth/garold-elizabeth.component';
import {FrankivskGalichComponent} from './frankivsk-galich/frankivsk-galich.component';
import {DovbankaComponent} from './dovbanka/dovbanka.component';
import {LodiaComponent} from './lodia/lodia.component';
import {EventsComponent} from './events/events.component';
import {HelpFondComponent} from './help-fond/help-fond.component';
import {EmbassyComponent} from './embassy/embassy.component';
import {NorwayComponent} from './norway/norway.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'our-events',  component: EventsComponent},
    {path: 'shipyard', component: ShipyardComponent},
    {path: 'embassy', component: EmbassyComponent},
    {path: 'description', component: DescriptionComponent},
    {path: 'boat-credo', component: BoatCredoComponent},
    {path: 'garold-elizabeth', component: GaroldElizabethComponent},
    {path: 'frankivsk-galich', component: FrankivskGalichComponent},
    {path: 'dovbanka', component: DovbankaComponent},
    {path: 'lodia', component: LodiaComponent},
    {path: 'help-found', component: HelpFondComponent},
    {path: 'norway', component: NorwayComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
