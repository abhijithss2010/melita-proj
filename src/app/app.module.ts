import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { UIShellModule } from 'carbon-components-angular';
import { HeaderComponent } from './core/components/header/header.component';
import { SharedModule } from './core/shared/shared.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LoadingModule } from './core/modules/loading/loading.module';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    UIShellModule,
    SharedModule,
    AppRoutingModule,
    LoadingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
