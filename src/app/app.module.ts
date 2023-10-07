import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './core/pages/home/home.component';
import { OpinionsComponent } from './core/components/opinions/opinions.component';
import { ContentComponent } from './core/components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    OpinionsComponent,
    ContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
