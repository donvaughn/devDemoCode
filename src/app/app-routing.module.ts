import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    component: StartseiteComponent,
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
