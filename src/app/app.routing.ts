import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FundComponent } from './fund/fund.component';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'fund-regulations', component: FundComponent }
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
