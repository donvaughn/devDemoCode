import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { demoRoutes } from './demo/demo-definitions';

export const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  // TODO: 5) Demo Routes einbinden
  ...demoRoutes,
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
