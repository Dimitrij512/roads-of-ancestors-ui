import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {FundComponent} from './fund/fund.component';
import {ShipyardComponent} from './shipyard/shipyard.component';
import {TeamComponent} from './team/team.component';
import {DescriptionComponent} from './description/description.component';
import {BoatCredoComponent} from './boat-credo/boat-credo.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'fund-regulations', component: FundComponent},
    {path: 'shipyard', component: ShipyardComponent},
    {path: 'team', component: TeamComponent},
    {path: 'description', component: DescriptionComponent},
    {path: 'boat-credo', component: BoatCredoComponent}
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
