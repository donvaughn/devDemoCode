import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { demoComponents } from './demo/demo-definitions';
import { StartseiteComponent } from './startseite/startseite.component';

@NgModule({
  declarations: [
    AppComponent,
    // TODO: 6) Demo Components einbinden
    ...demoComponents,
    StartseiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // TODO: 7) bei Angular 8 muss man eventuell entryComponents definieren/einbinden
  entryComponents: []
})
export class AppModule { }


// TODO: 8) jetzt kommt man in Development an localhost:4200/demo -> ng serve
// TODO: 9) unter Production ist er nicht erreichbar -> ng serve --prod
// TODO: 10) beim Bauen in Development mode ist Demo Code drin (TODO 10b anschauen) -> ng build && npm run break-if-demo-found
// TODO: 11) beim Bauen in Production mode ist Demo Code weg -> ng build --prod && npm run break-if-demo-found
