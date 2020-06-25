import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { demoRoutes } from './demo/demo-definitions';
// import { DemoComponent } from './demo/demo.component';

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

  // TODO: 12) testen, dass das Production Build verhindert wird, wenn Demo Code im Kompilat ist: npm run build:prod
  // {
  //   path: 'demo',
  //   component: DemoComponent,
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
