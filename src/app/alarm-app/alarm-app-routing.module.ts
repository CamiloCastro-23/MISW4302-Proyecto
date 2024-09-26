import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { SecurityComponent } from './pages/security/security.component';
import { ApagarComponent } from './pages/apagar/apagar.component';
import { FelicidadesComponent } from './pages/felicidades/felicidades.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'users',
        component: DashboardComponent
      },
      {
        path: 'rewards',
        component: RewardsComponent
      },
      {
        path: 'security',
        component: SecurityComponent
      },
      {
        path: 'off',
        component: ApagarComponent
      },
      {
        path: 'success',
        component: FelicidadesComponent
      },
      {
        path: '**',
        redirectTo: 'users'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmAppRoutingModule { }
