import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { EBarChartComponent } from './e-bar-chart/e-bar-chart.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'chartJs',
    component: BarChartComponent,
  },
  {
    path: 'eBarChart',
    component: EBarChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
