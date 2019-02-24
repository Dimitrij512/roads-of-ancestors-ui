import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FundComponent } from './fund/fund.component';
import {ShipyardComponent} from './shipyard/shipyard.component';
import {VertepComponent} from './vertep/vertep.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'fund-regulations', component: FundComponent },
    { path: 'shipyard', component: ShipyardComponent },
    { path: 'vertep', component: VertepComponent }
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
