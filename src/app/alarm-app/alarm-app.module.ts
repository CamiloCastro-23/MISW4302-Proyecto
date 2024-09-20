import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmAppRoutingModule } from './alarm-app-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { RewardsComponent } from './pages/rewards/rewards.component';


@NgModule({
  declarations: [
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    LayoutComponent,
    RewardsComponent
  ],
  imports: [
    CommonModule,
    AlarmAppRoutingModule,
    MaterialModule
  ]
})
export class AlarmAppModule { }
