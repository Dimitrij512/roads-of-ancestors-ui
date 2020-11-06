import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

import { ComponentsComponent } from './components.component';
import {GoalsComponent} from './goals/goals.component';
import {ParticipationComponent} from './participation/participation.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        RouterModule
    ],
    declarations: [
        ComponentsComponent,
        GoalsComponent,
        ParticipationComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
