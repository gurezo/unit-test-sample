import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { OrganismsComponent } from './page/organisms/organisms.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    OrganismsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
